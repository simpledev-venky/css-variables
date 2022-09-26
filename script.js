console.log(document.documentElement);
// console.log(document.head)
let inputFields = document.querySelectorAll("input");
inputFields.forEach((input) => {
  console.log(input.value);

  input.addEventListener("change", (inp) => {
    console.log(inp.target.value);
    console.log(inp.target.name);
    console.log(inp.target.type);
    let inpVal = inp.target.value;
    let inpName = inp.target.name;
    let inpType = inp.target.type;
    if (inpType == "range") {
      inpVal += "px";
    }
    document.documentElement.style.setProperty(`--${inpName}`, `${inpVal}`);
    let a = document.documentElement.style.getPropertyValue("--border");
    console.log(a);
  });
});
