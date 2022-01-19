async function run() {
  heapSort();
}

const heapify = async (i, n) => {
  let largest = i;
  let child1 = 2 * i + 1;
  let child2 = 2 * i + 2;
  let c1 = 0;
  let c2 = 0;

  await bars[largest].setAttribute("class", "cell current");

  if (child1 < n) {
    await bars[child1].setAttribute("class", "cell current");
    if (await compare(child1, largest)) {
      await bars[largest].setAttribute("class", "cell");
      largest = child1;
      c1 = 1;
    }

    if (c1 == 0) {
      await bars[child1].setAttribute("class", "cell");
    }
  }

  if (child2 < n) {
    await bars[child2].setAttribute("class", "cell current");
    if (await compare(child2, largest)) {
      await bars[largest].setAttribute("class", "cell");
      largest = child2;
      c2 = 1;
    }

    if (c2 == 0) {
      await bars[child2].setAttribute("class", "cell");
    }
  }

  if (i != largest) {
    await bars[i].setAttribute("class", "cell current");
    await swap(i, largest);
    await bars[largest].setAttribute("class", "cell");
    await bars[i].setAttribute("class", "cell");
    await heapify(largest, n);
  }
  await bars[largest].setAttribute("class", "cell");
};

const heapSort = async () => {
  disableControls();
  let startTime = performance.now();
  let n = bars.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    bars[0].setAttribute("class", "cell current");
    bars[i].setAttribute("class", "cell current");
    await swap(0, i);
    bars[i].setAttribute("class", "cell done");
    await heapify(0, i);
  }
  bars[0].setAttribute("class", "cell done");

  let endTime = performance.now();
   document.getElementById("et").innerHTML = `${
     endTime - startTime
   } milliseconds`;
  enableControls();
};
