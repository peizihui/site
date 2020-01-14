const js = import("./node_modules/@peiwisdom/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("HPB WebAssembly");
});