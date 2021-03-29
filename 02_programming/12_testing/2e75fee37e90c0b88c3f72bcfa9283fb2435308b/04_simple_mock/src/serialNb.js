const serialnum = {
  _n: 0,
  get next() {
    return this._n++;
  },
  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be larger");
  },
};

serialnum.next = 10;
console.log(serialnum.next);
console.log(serialnum.next);
console.log(serialnum._n);
