

/**	
	* Implement function countOccurrences:
	*
	* Implement function which takes two params (`str`, `substr`) and returns the
	* number of times the `substr` appears in `str`.
	*
	* e.g. for str = 'azyxxzyzy', substr = 'zy' it should return 3, because 'zy'
	* appears 3 times: 'a[zy]xx[zy][zy]'.
	*
	* str and substr contains only lowercase alphabetical letters. substr
	* doesn't contain repeating letters (substr can't be equal xyx)
	*
	* countOccurrences(azyxxzyzy, zy) === 3
	* countOccurrences(ababagalamaga, ba) === 2
	*
	* @param {string} str
	* @param {string} substr
	*
	* @return {number}
	*/
	function countOccurrences(str, substr) {
		let res = 0;
		for(let i = 0; i<str.length; i++){
			if((str[i] + str[i+1]) == substr){
				res++;
			}
		}
		return res;
	}

    console.log(countOccurrences('stststssstst', 'st'))


	/**	
	* Implement function storage:
	*
	* function works with next pattern:
	
	* const propsStorage = storage();
	* propsStorage.setValue('name', 'Peter');
	* propsStorage.setValue('age', 30);
	* propsStorage.getValue('name'); // Peter
	* propsStorage.getValue('age'); // 30
	* propsStorage.setValue('age', 31);
	* propsStorage.getValue('age'); // 31
	* propsStorage.getValue('occupation'); // undefined
	*
	* @return {function}
	*/
	function storage() {
		return (
			{
				name: '',
				age: 0,

				setValue(key, val){
					this[key] = val
					
				},
				getValue(val){
					return this[val];
				}
			}
		)
	   }

	  

   //------------------------------------------//

	   /**	
	* Implement function toDigitArray:
	*
	* Function takes a natural number N and returns an array with its digits in
	* order from least significant to most significant. Least significant means the
	* last digit in a number and most significant means the first one.
	*
	* e.g. for N = 46156 it should return [6, 5, 1, 6, 4]. Make sure all items
	* in returned arrays are numbers. ['6', '5', '1', '6', '4'] is wrong answer.
	*
	* @param {number} N
	*
	* @return {number[]}
	*/
	function toDigitArray(N) {

		let arr = [N.toString().split('').reverse()];
		arr = arr.flat()
		let newArr = arr.map(elem =>{
			return elem = +elem
		})
		return newArr
	   }

	   console.log(toDigitArray(46156))

	   //---------------------------------//

	   /**	
	* Implement function calculateRoundedRating:
	*
	* Function takes an exact rating of the product - the float number between 1
	* and 5 including (range `[1, 5]`) and returns the rounded rating to closest
	* 0.5 (1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5 or 5).
	*
	* calculateRoundedRating(3.666); // 3.5
	* calculateRoundedRating(1.92); // 2
	* calculateRoundedRating(4.299999); // 4.5
	* calculateRoundedRating(1.2499999); // 1
	*
	* @param {number} rating
	*
	* @return {number}
	*/
	function calculateRoundedRating(rating) {
		return Math.round(rating)
	   }


/**	
	* Implement function countWords:
	*
	* Function takes a text without punctuation marks and returns the number of
	* words in the given text. Words are separated by one or many whitespaces.
	* Also, whitespaces can appear at the beginning and end of the text.
	*
	* e.g. for `text = '   You  area programmer '` it should return `3`.
	*
	* @param {string} text
	*
	* @return {number}
	*/
	function countWords(text) {
		let newText = text.split(' ').filter(word => word !='')
		return newText.length
	}

console.log(countWords('   You  area programmer '))


//---------------------------------------//


/**	
	* Implement function extractYears:
	*
	* Function takes a text and returns array of years between 1900 and 2099
	* including (range `[1900, 2099]`) which appear in the given text. The order of
	* years in the returned array is the same as they appear in the text. If no
	* year found the function returns an empty array.
	*
	* e.g. for text:
	*
	* Usually people who were born in 1995 can find they first job not later than
	* in 2020 but also not earlier than in 2012. Number 11999 is not included in
	* the result because it's too big. It is out of range between 1900 and 2099.
	*
	* The result should be `[1995, 2020, 2012, 1900, 2099]`
	*
	* @param {string} text
	*
	* @return {number[]}
	*/

	let text =  'Usually people who were born in 1995 can find they first job not later than in 2020 but 2200 also 1938 not earlier than in 2012. Number 11999 is not included in the result because it'

	function extractYears(text) {

		let splitText = text.split(' ')
		
		return splitText
	}
	console.log(extractYears(text))
//
