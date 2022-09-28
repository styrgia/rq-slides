import React  from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import axios from 'axios';
import PaginatedGrid from "@/components/NewPaginatedGrid";

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
    return <PaginatedGrid />
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['products'], () => getProducts());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default IndexPage;
