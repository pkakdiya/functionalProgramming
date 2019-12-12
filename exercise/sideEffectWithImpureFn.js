
function counter(i) {
  /** This is called as closure */
  function f() {
    /** Function is modifing the value of i and perform side effect to change the assigment of i 
     * so if we rely value of i then we might get into trouble */  
    i = i + 1;
    return i
  }
  return f;
}
//** Here count is holding the value of i */
const count = counter(0);
console.log(count());
console.log(count());
