import * as XLSX from "xlsx";

export const regexTest = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(value);
};

export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const objectIsNullOrEmpty = (obj) => {
  const type = typeof obj;
  if (type === "object") {
    return isEmpty(obj);
  }
  return true;
};

export const fileToBase64 = (blob) => {
  return new Promise((resolve) => {
    var reader = new FileReader();

    reader.onload = (() => {
      return (e) => {
        var binaryData = e.target.result;
        resolve(window.btoa(binaryData));
      };
    })(blob);

    reader.readAsBinaryString(blob);
  });
};

// function to read from excel to json
export const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (evt) => {
    const bstr = evt.target.result;
    const wb = XLSX.read(bstr, { type: "binary" });
    /* Get first worksheet */
    let data, res, arrObj;

    wb.SheetNames.forEach((sheet) => {
      const ws = wb.Sheets[sheet];
      /* Convert array of arrays */
      data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

      /* Update state */
      res = convertToJson(data);
    });
  };
  reader.readAsBinaryString(file);
};

export const convertToJson = (csv) => {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  return result;
};

export const fileToBase64DtaUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });



/**
 *
 * @param {String} string
 */
export const convertStringToProperCase = (string) => {
  return [...string]
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
};

export const fullName = (lname, fname) => {
  return firstLetterCapital(lname) + " " + firstLetterCapital(fname);
};

export const firstLetterCapital = (prop) => {
  return prop.charAt(0).toUpperCase() + prop.slice(1).toLowerCase();
};

