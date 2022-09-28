import React, { useEffect, useMemo, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import ProductsGrid from '@/components/ProductsGrid';
import { Input, Pagination, Space } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/pages';

function PaginatedGrid() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const debouncedSearchValue = useDebounce(searchValue, 1000);

    const { data, isSuccess, isLoading, isError } = useQuery(
        ['products', debouncedSearchValue, page],
        () => getProducts(page, debouncedSearchValue),
        { keepPreviousData: true, staleTime: 3000 }
    );

    const totalPages = useMemo(() => {
        if (!data) return 0;
        return (data.total - data.limit) / data.limit;
    }, [data?.total, data?.limit]);

    const renderResult = () => {
        if (isLoading) {
            return 'Loading...';
        }

        if (isError) {
            return <div className="center">Error 😢</div>;
        }

        if (isSuccess) {
            return (
                <>
                    <ProductsGrid data={data.products} />
                    <Space h="xl" />
                    {totalPages > 0 && (
                        <Pagination total={totalPages} page={page} onChange={setPage} />
                    )}
                </>
            );
        }

        return <></>;
    };

    useEffect(() => {
        setPage(1);
    }, [searchValue]);

    return (
        <>
            <h2>Products</h2>
            <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchValue(event.target.value)
                }
                value={searchValue}
            />
            <Space h="xl" />
            {renderResult()}
        </>
    );
}

export default PaginatedGrid;
