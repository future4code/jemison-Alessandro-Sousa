function checaTriangulo(a: number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(3,4,5))
  console.log(checaTriangulo(4,4,4))
  console.log(checaTriangulo(3,4,4))