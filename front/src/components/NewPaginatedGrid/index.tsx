import React, { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import ProductsGrid from '@/components/ProductsGrid';
import { Input, Pagination, Space } from '@mantine/core';
import { useProducts } from '@/components/NewPaginatedGrid/queries';

function PaginatedGrid() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const debouncedSearchValue = useDebounce(searchValue, 1000);

    const { data, isSuccess, isLoading, isError } = useProducts(page, debouncedSearchValue);

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
                    <Pagination
                        total={Math.floor((data.total - data.limit) / data.limit) || 0}
                        page={page}
                        onChange={setPage}
                    />
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
