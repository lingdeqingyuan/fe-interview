// map与object区别
// 1. map是有序结构，object是无序结构
// 2. map的key是任意类型 object的key只能是string或者symbol
// 3. map拥有iterator,可用forEach for of 迭代，object没有
// 4. map的性能会更好

const map = new Map();
// api
map.size;
map.set("name", "lyj");
map.get("name");
map.has("name");
map.delete("name");
map.clear();

// 迭代
map.entries();
map.keys();
map.values();
