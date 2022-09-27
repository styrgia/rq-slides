import React from 'react';
import { Image, SimpleGrid } from '@mantine/core';
import { getProducts, Product } from '@/pages';
import { useQuery } from '@tanstack/react-query';

type ProductsGridProps = {
    data: Product[];
};

function ProductsGrid({ data }: ProductsGridProps) {
    return (
        <>
            <SimpleGrid cols={3} spacing="xl">
                {data.map(item => {
                    return (
                        <div key={item.id}>
                            <div>{item.title}</div>
                            <Image src={item.thumbnail} radius="md" width={100} height={100} />
                        </div>
                    );
                })}
            </SimpleGrid>
        </>
    );
}

export default ProductsGrid;
