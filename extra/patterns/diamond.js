export default function diamond(n) {
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
  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      a += " ";
    }
    for (k = n; k > i; k--) {
      a += "* ";
    }
    a += "\n";
  }
  console.log("Print a diamond with rows", n);
  console.log(a);
}
