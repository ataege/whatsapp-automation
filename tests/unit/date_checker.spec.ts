import { checkDate } from '../../src/utils/dateChecker';

describe('checkDate', () => {
	it('should return boolean', () => {
		var checkedDate = checkDate('August 29, 2021 15:50:00');
		expect(typeof checkedDate === 'boolean').toBeTruthy();
	});
});
