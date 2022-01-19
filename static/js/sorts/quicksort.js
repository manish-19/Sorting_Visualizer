async function run() {
  quickSort();
}
const quickSort = async(bars,left, right) => {
  //disableControls();
  let startTime = performance.now(); 
  let n = bars.length;
  let min_idx;
    if (left < right) {
        let pivot = left;
        let i = left;
        let j = right;

	while (i < j) {
            if (!running) return;
            while (compare(pivot, i) && i < j) {
                i++;
            }
	    if (!compare(pivot, j)) {
                j--;
            }
            if (i < j) {
		 await swap(i, j);
            }
        }
        await swap(pivot, j);
	await bars[i].setAttribute("class","cell current")
	bars[j].setAttribute("class","cell current")
	bars[pivot].setAttribute("class","cell")
        await quickSort(bars, left, j - 1);
	await quickSort(bars, j + 1, right);
    }
}

let endTime = performance.now();
   document.getElementById("et").innerHTML = `${
     endTime - startTime
   } milliseconds`;
  enableControls();
};