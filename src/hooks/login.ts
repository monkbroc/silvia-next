import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../hooks';
import { selectLoggedIn } from '../slices/login';

export const useEnsureLoggedIn = () => {
    const loggedIn = useAppSelector(selectLoggedIn);
    const router = useRouter();

    useEffect(() => {
        if (!loggedIn) {
            router.replace('/login');
        }
    }, []);
};