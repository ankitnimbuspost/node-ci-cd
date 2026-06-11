const {sum,multiply,divide,subtract} = require("../calculation")

test('add numbers',()=>{
   expect(sum(2,3)).toBe(5);
});
test('add numbers',()=>{
   expect(sum(20,-3)).toBe(17);
});

test('add numbers',()=>{
   expect(sum(-10,-10)).toBe(-20);
});
test('multiple numbers',()=>{
   expect(multiply(2,3)).toBe(6);
});
test('multiple numbers',()=>{
   expect(multiply(-10,3)).toBe(-30);
});
test('multiple numbers',()=>{
   expect(multiply(-2,-3)).toBe(6);
});
test('divide numbers',()=>{
   expect(divide(20,5)).toBe(4);
});
test('divide numbers',()=>{
   expect(divide(-20,4)).toBe(-5);
});
test('subtract numbers',()=>{
   expect(subtract(-20,4)).toBe(-24);
});
test('subtract numbers',()=>{
   expect(subtract(-20,-4)).toBe(-16);
});
