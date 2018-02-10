export const countPercent = (count, item) => {
	if( item === 0) {
		return false;
	}
	return count/item * 100;
};