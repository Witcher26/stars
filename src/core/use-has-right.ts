import authorization from './authorization';

export function useHasRight(rights: string[]) {
    return authorization(rights);
}