import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/pages';

export const useProducts = (page: number, searchString: string) => {
    return useQuery(['products', searchString, page], () => getProducts(page, searchString), {
        keepPreviousData: true,
        staleTime: 5000,
    });
};
