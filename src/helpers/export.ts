export function exportToCSV(filename: string, rows: any[]): string {
  const keys = Object.keys(rows[0])
  //let csvContent = 'data:text/csv;charset=utf-8,'
  let csvContent = ''
  keys.forEach((k) => (csvContent = csvContent + k + ','))
  csvContent += '\n'
  rows.forEach((x) => {
    let row = ''
    keys.forEach((k) => (row = row + x[k] + ','))
    csvContent = csvContent + row + '\n'
  })

  return downloadCSV(csvContent, filename) ?? ''
  // var encodedUri = encodeURI(csvContent);
  // window.open(encodedUri);
  //     downloadCSV(csv.join('\n'), filename)
}

function downloadCSV(csv: string, filename: string) {
  var csvFile
  var downloadLink

  if (
    window.Blob == undefined ||
    window.URL == undefined ||
    window.URL.createObjectURL == undefined
  ) {
    alert("Your browser doesn't support Blobs")
    return
  }

  csvFile = new Blob([csv], { type: 'text/csv' })
  let url = window.URL.createObjectURL(csvFile)
  return url
}
