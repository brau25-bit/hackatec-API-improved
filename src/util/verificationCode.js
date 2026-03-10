const lowerCase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const upperCase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const numbers = Array.from({ length: 10 }, (_, i) =>
  String.fromCharCode(48 + i)
);

const symbols = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '=', '+', '[', ']', '{', '}', '\\',
  ';', ':', '<', '>', '/', '?'
];

const caracteres = [...lowerCase, ...upperCase, ...numbers, ...symbols];

const codeLen = 10

export async function generateCode(){
    let code = ""
    while(code.length<codeLen){
        code += caracteres[Math.floor(Math.random() * caracteres.length)]
    }

    return code
}