import React, { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { ActivitiesService } from '@/api';
import axios from 'axios';
import { Input, Pagination, Space } from '@mantine/core';
import useDebounce from '@/hooks/useDebounce';
import ProductsGrid from '@/components/ProductsGrid';
import Timer from '@/components/Timer';

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
};

export type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

export const getProducts = async (page = 1, search?: string): Promise<ProductsResponse> => {
    const searchQuery = search?.length ? `/search?q=${search}&` : '?';
    const limit = 9;
    const skip = page === 1 ? 0 : page * limit;
    const response = await axios.get<ProductsResponse>(
        `https://dummyjson.com/products${searchQuery}limit=${limit}&skip=${skip}`
    );
    return response.data;
};

function IndexPage() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const debouncedSearchValue = useDebounce(searchValue, 1000);

    const { data, isSuccess, isLoading, isError } = useQuery(
        ['products', debouncedSearchValue, page],
        () => getProducts(page, debouncedSearchValue),
        { keepPreviousData: true, staleTime: 3000 }
    );

    useEffect(() => {
        setPage(1);
    }, [searchValue]);

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
                    <ProductsGrid
                        data={data.products}
                        page={page}
                        debouncedSearchValue={debouncedSearchValue}
                    />
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
    return (
        <>
            <h2>Products</h2>
            <Input
                onChange={({ target: { value } }) => setSearchValue(value)}
                value={searchValue}
            />
            <Space h="xl" />
            {renderResult()}

            <Timer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['products'], getProducts);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default IndexPage;
