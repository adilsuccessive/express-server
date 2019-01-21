export default function equilateral(n) {
  let a = "",
    i,
    j,
    k;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      a += " ";
    }

    for (k = 0; k <= i; k++) {
      a += "* ";
    }

    a += "\n";
  }
  console.log("Print a equilateral traingle with rows", n);
  console.log(a);
}
