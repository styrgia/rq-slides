import React from 'react';
import { Image, SimpleGrid } from '@mantine/core';
import { Product } from '@/pages';

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
