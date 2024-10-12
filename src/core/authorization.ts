export default (rights: string[]) => (right: string): boolean => {
    if (!right) {
        throw new Error('No right provided');
    }
    return (rights || []).some(data => data === right);
}