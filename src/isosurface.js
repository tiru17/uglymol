// @flow

/* eslint comma-spacing: 0, no-multi-spaces: 0 */

var edgeTable = new Int32Array([
  0x0  , 0x0  , 0x202, 0x302, 0x406, 0x406, 0x604, 0x704,
  0x804, 0x805, 0xa06, 0xa06, 0xc0a, 0xd03, 0xe08, 0xf00,
  0x90 , 0x98 , 0x292, 0x292, 0x496, 0x49e, 0x694, 0x694,
  0x894, 0x894, 0xa96, 0xa96, 0xc9a, 0xc92, 0xe91, 0xe90,
  0x230, 0x230, 0x33 , 0x13a, 0x636, 0x636, 0x434, 0x43c,
  0xa34, 0xa35, 0x837, 0x936, 0xe3a, 0xf32, 0xc31, 0xd30,
  0x2a0, 0x2a8, 0xa3 , 0xaa , 0x6a6, 0x6af, 0x5a4, 0x4ac,
  0xaa4, 0xaa4, 0x9a6, 0x8a6, 0xfaa, 0xea3, 0xca1, 0xca0,
  0x460, 0x460, 0x662, 0x762, 0x66 , 0x66 , 0x265, 0x364,
  0xc64, 0xc65, 0xe66, 0xe66, 0x86a, 0x863, 0xa69, 0xa60,
  0x4f0, 0x4f8, 0x6f2, 0x6f2, 0xf6 , 0xfe , 0x2f5, 0x2fc,
  0xcf4, 0xcf4, 0xef6, 0xef6, 0x8fa, 0x8f3, 0xaf9, 0xaf0,
  0x650, 0x650, 0x453, 0x552, 0x256, 0x256, 0x54 , 0x154,
  0xe54, 0xf54, 0xc57, 0xd56, 0xa5a, 0xb52, 0x859, 0x950,
  0x7c0, 0x6c1, 0x5c2, 0x4c2, 0x3c6, 0x2ce, 0xc5 , 0xc4 ,
  0xfc4, 0xec5, 0xdc6, 0xcc6, 0xbca, 0xac2, 0x8c1, 0x8c0,
  0x8c0, 0x8c0, 0xac2, 0xbc2, 0xcc6, 0xcc6, 0xec4, 0xfcc,
  0xc4 , 0xc5 , 0x2c6, 0x3c6, 0x4c2, 0x5c2, 0x6c1, 0x7c0,
  0x950, 0x859, 0xb52, 0xa5a, 0xd56, 0xc57, 0xe54, 0xe5c,
  0x154, 0x54 , 0x25e, 0x256, 0x552, 0x453, 0x658, 0x650,
  0xaf0, 0xaf0, 0x8f3, 0x8fa, 0xef6, 0xef6, 0xcf4, 0xcfc,
  0x2f4, 0x3f5, 0xff , 0x1f6, 0x6f2, 0x6f3, 0x4f9, 0x5f0,
  0xa60, 0xa69, 0x863, 0x86a, 0xe66, 0xe67, 0xd65, 0xc6c,
  0x364, 0x265, 0x166, 0x66 , 0x76a, 0x663, 0x460, 0x460,
  0xca0, 0xca0, 0xea2, 0xfa2, 0x8a6, 0x8a6, 0xaa4, 0xba4,
  0x4ac, 0x5a4, 0x6ae, 0x7a6, 0xaa , 0xa3 , 0x2a8, 0x2a0,
  0xd30, 0xc31, 0xf32, 0xe3a, 0x936, 0x837, 0xb35, 0xa34,
  0x43c, 0x434, 0x73e, 0x636, 0x13a, 0x33 , 0x339, 0x230,
  0xe90, 0xe90, 0xc92, 0xc9a, 0xa96, 0xa96, 0x894, 0x89c,
  0x694, 0x695, 0x49f, 0x496, 0x292, 0x392, 0x98 , 0x90 ,
  0xf00, 0xe08, 0xd03, 0xc0a, 0xa06, 0xa0e, 0x805, 0x804,
  0x704, 0x604, 0x506, 0x406, 0x302, 0x202, 0x0  , 0x0]);


// generated from classical triTable by tools/isolut.py
var segTable = [
  [],
  [],
  [1, 9],
  [1, 8, 1, 9],
  [2, 10, 10, 1],
  [2, 10, 10, 1],
  [9, 2, 2, 10, 10, 9],
  [2, 8, 2, 10, 10, 8, 10, 9],
  [11, 2],
  [0, 11, 11, 2],
  [1, 9, 11, 2],
  [1, 11, 11, 2, 1, 9, 9, 11],
  [3, 10, 10, 1, 11, 10],
  [0, 10, 10, 1, 8, 10, 11, 10],
  [3, 9, 11, 9, 11, 10, 10, 9],
  [8, 10, 10, 9, 11, 10],
  [4, 7],
  [4, 3, 4, 7],
  [1, 9, 4, 7],
  [4, 1, 1, 9, 4, 7, 7, 1],
  [2, 10, 10, 1, 4, 7],
  [3, 4, 4, 7, 2, 10, 10, 1],
  [9, 2, 2, 10, 10, 9, 4, 7],
  [2, 10, 10, 9, 9, 2, 9, 7, 7, 2, 4, 7],
  [4, 7, 11, 2],
  [11, 4, 4, 7, 11, 2, 2, 4],
  [1, 9, 4, 7, 11, 2],
  [4, 7, 11, 4, 11, 9, 11, 2, 2, 9, 1, 9],
  [3, 10, 10, 1, 11, 10, 4, 7],
  [1, 11, 11, 10, 10, 1, 1, 4, 4, 11, 4, 7],
  [4, 7, 0, 11, 11, 9, 11, 10, 10, 9],
  [4, 7, 11, 4, 11, 9, 11, 10, 10, 9],
  [9, 5, 5, 4],
  [9, 5, 5, 4],
  [0, 5, 5, 4, 1, 5],
  [8, 5, 5, 4, 3, 5, 1, 5],
  [2, 10, 10, 1, 9, 5, 5, 4],
  [2, 10, 10, 1, 9, 5, 5, 4],
  [5, 2, 2, 10, 10, 5, 5, 4, 4, 2],
  [2, 10, 10, 5, 5, 2, 5, 3, 5, 4, 4, 3],
  [9, 5, 5, 4, 11, 2],
  [0, 11, 11, 2, 9, 5, 5, 4],
  [0, 5, 5, 4, 1, 5, 11, 2],
  [1, 5, 5, 2, 5, 8, 8, 2, 11, 2, 5, 4],
  [10, 3, 11, 10, 10, 1, 9, 5, 5, 4],
  [9, 5, 5, 4, 8, 1, 8, 10, 10, 1, 11, 10],
  [5, 4, 0, 5, 0, 11, 11, 5, 11, 10, 10, 5],
  [5, 4, 8, 5, 8, 10, 10, 5, 11, 10],
  [9, 7, 5, 7, 9, 5],
  [9, 3, 9, 5, 5, 3, 5, 7],
  [0, 7, 1, 7, 1, 5, 5, 7],
  [1, 5, 5, 3, 5, 7],
  [9, 7, 9, 5, 5, 7, 10, 1, 2, 10],
  [10, 1, 2, 10, 9, 5, 5, 0, 5, 3, 5, 7],
  [2, 8, 2, 5, 5, 8, 5, 7, 10, 5, 2, 10],
  [2, 10, 10, 5, 5, 2, 5, 3, 5, 7],
  [7, 9, 9, 5, 5, 7, 11, 2],
  [9, 5, 5, 7, 7, 9, 7, 2, 2, 9, 11, 2],
  [11, 2, 1, 8, 1, 7, 1, 5, 5, 7],
  [11, 2, 1, 11, 1, 7, 1, 5, 5, 7],
  [9, 5, 5, 8, 5, 7, 10, 1, 3, 10, 11, 10],
  [5, 7, 7, 0, 0, 5, 9, 5, 11, 0, 0, 10, 10, 1, 11, 10],
  [11, 10, 10, 0, 0, 11, 10, 5, 5, 0, 0, 7, 5, 7],
  [11, 10, 10, 5, 5, 11, 5, 7],
  [10, 6, 6, 5, 5, 10],
  [5, 10, 10, 6, 6, 5],
  [1, 9, 5, 10, 10, 6, 6, 5],
  [1, 8, 1, 9, 5, 10, 10, 6, 6, 5],
  [1, 6, 6, 5, 5, 1, 2, 6],
  [1, 6, 6, 5, 5, 1, 2, 6],
  [9, 6, 6, 5, 5, 9, 0, 6, 2, 6],
  [5, 9, 8, 5, 8, 2, 2, 5, 2, 6, 6, 5],
  [11, 2, 10, 6, 6, 5, 5, 10],
  [11, 0, 11, 2, 10, 6, 6, 5, 5, 10],
  [1, 9, 11, 2, 5, 10, 10, 6, 6, 5],
  [5, 10, 10, 6, 6, 5, 1, 9, 9, 2, 9, 11, 11, 2],
  [6, 3, 11, 6, 6, 5, 5, 3, 5, 1],
  [11, 0, 11, 5, 5, 0, 5, 1, 11, 6, 6, 5],
  [11, 6, 6, 3, 6, 0, 6, 5, 5, 0, 5, 9],
  [6, 5, 5, 9, 9, 6, 9, 11, 11, 6],
  [5, 10, 10, 6, 6, 5, 4, 7],
  [4, 3, 4, 7, 6, 5, 5, 10, 10, 6],
  [1, 9, 5, 10, 10, 6, 6, 5, 4, 7],
  [10, 6, 6, 5, 5, 10, 1, 9, 9, 7, 7, 1, 4, 7],
  [6, 1, 2, 6, 6, 5, 5, 1, 4, 7],
  [2, 5, 5, 1, 2, 6, 6, 5, 4, 3, 4, 7],
  [4, 7, 0, 5, 5, 9, 0, 6, 6, 5, 2, 6],
  [3, 9, 9, 7, 4, 7, 2, 9, 5, 9, 9, 6, 6, 5, 2, 6],
  [11, 2, 4, 7, 10, 6, 6, 5, 5, 10],
  [5, 10, 10, 6, 6, 5, 4, 7, 7, 2, 2, 4, 11, 2],
  [1, 9, 4, 7, 11, 2, 5, 10, 10, 6, 6, 5],
  [9, 2, 1, 9, 9, 11, 11, 2, 4, 11, 4, 7, 5, 10, 10, 6, 6, 5],
  [4, 7, 11, 5, 5, 3, 5, 1, 11, 6, 6, 5],
  [5, 1, 1, 11, 11, 5, 11, 6, 6, 5, 0, 11, 11, 4, 4, 7],
  [0, 5, 5, 9, 0, 6, 6, 5, 3, 6, 11, 6, 4, 7],
  [6, 5, 5, 9, 9, 6, 9, 11, 11, 6, 4, 7, 7, 9],
  [10, 4, 9, 10, 6, 4, 10, 6],
  [4, 10, 10, 6, 6, 4, 9, 10],
  [10, 0, 1, 10, 10, 6, 6, 0, 6, 4],
  [1, 8, 1, 6, 6, 8, 6, 4, 1, 10, 10, 6],
  [1, 4, 9, 1, 2, 4, 2, 6, 6, 4],
  [2, 9, 9, 1, 2, 4, 2, 6, 6, 4],
  [2, 4, 2, 6, 6, 4],
  [2, 8, 2, 4, 2, 6, 6, 4],
  [10, 4, 9, 10, 10, 6, 6, 4, 11, 2],
  [8, 2, 11, 2, 9, 10, 10, 4, 10, 6, 6, 4],
  [11, 2, 1, 6, 6, 0, 6, 4, 1, 10, 10, 6],
  [6, 4, 4, 1, 1, 6, 1, 10, 10, 6, 8, 1, 1, 11, 11, 2],
  [9, 6, 6, 4, 9, 3, 3, 6, 9, 1, 11, 6],
  [11, 1, 1, 8, 11, 6, 6, 1, 9, 1, 1, 4, 6, 4],
  [11, 6, 6, 3, 6, 0, 6, 4],
  [6, 4, 8, 6, 11, 6],
  [7, 10, 10, 6, 6, 7, 8, 10, 9, 10],
  [0, 7, 0, 10, 10, 7, 9, 10, 6, 7, 10, 6],
  [10, 6, 6, 7, 7, 10, 1, 10, 7, 1, 8, 1],
  [10, 6, 6, 7, 7, 10, 7, 1, 1, 10],
  [2, 6, 6, 1, 6, 8, 8, 1, 9, 1, 6, 7],
  [2, 6, 6, 9, 9, 2, 9, 1, 6, 7, 7, 9, 9, 3],
  [0, 7, 0, 6, 6, 7, 2, 6],
  [2, 7, 6, 7, 2, 6],
  [11, 2, 10, 6, 6, 8, 8, 10, 9, 10, 6, 7],
  [0, 7, 7, 2, 11, 2, 9, 7, 6, 7, 7, 10, 10, 6, 9, 10],
  [1, 8, 1, 7, 1, 10, 10, 7, 6, 7, 10, 6, 11, 2],
  [11, 2, 1, 11, 1, 7, 10, 6, 6, 1, 1, 10, 6, 7],
  [9, 6, 6, 8, 6, 7, 9, 1, 1, 6, 11, 6, 6, 3],
  [9, 1, 11, 6, 6, 7],
  [0, 7, 0, 6, 6, 7, 11, 0, 11, 6],
  [11, 6, 6, 7],
  [7, 6, 6, 11],
  [7, 6, 6, 11],
  [1, 9, 7, 6, 6, 11],
  [8, 1, 1, 9, 7, 6, 6, 11],
  [10, 1, 2, 10, 6, 11, 7, 6],
  [2, 10, 10, 1, 6, 11, 7, 6],
  [2, 9, 2, 10, 10, 9, 6, 11, 7, 6],
  [6, 11, 7, 6, 2, 10, 10, 3, 10, 8, 10, 9],
  [7, 2, 6, 2, 7, 6],
  [7, 0, 7, 6, 6, 0, 6, 2],
  [2, 7, 7, 6, 6, 2, 1, 9],
  [1, 6, 6, 2, 1, 8, 8, 6, 1, 9, 7, 6],
  [10, 7, 7, 6, 6, 10, 10, 1, 1, 7],
  [10, 7, 7, 6, 6, 10, 1, 7, 10, 1, 1, 8],
  [7, 0, 7, 10, 10, 0, 10, 9, 6, 10, 7, 6],
  [7, 6, 6, 10, 10, 7, 10, 8, 10, 9],
  [6, 8, 4, 6, 6, 11],
  [3, 6, 6, 11, 0, 6, 4, 6],
  [8, 6, 6, 11, 4, 6, 1, 9],
  [4, 6, 6, 9, 6, 3, 3, 9, 1, 9, 6, 11],
  [6, 8, 4, 6, 6, 11, 2, 10, 10, 1],
  [2, 10, 10, 1, 0, 11, 0, 6, 6, 11, 4, 6],
  [4, 11, 4, 6, 6, 11, 2, 9, 2, 10, 10, 9],
  [10, 9, 9, 3, 3, 10, 2, 10, 4, 3, 3, 6, 6, 11, 4, 6],
  [8, 2, 4, 2, 4, 6, 6, 2],
  [4, 2, 4, 6, 6, 2],
  [1, 9, 3, 4, 4, 2, 4, 6, 6, 2],
  [1, 9, 4, 1, 4, 2, 4, 6, 6, 2],
  [8, 1, 8, 6, 6, 1, 4, 6, 6, 10, 10, 1],
  [10, 1, 0, 10, 0, 6, 6, 10, 4, 6],
  [4, 6, 6, 3, 3, 4, 6, 10, 10, 3, 3, 9, 10, 9],
  [10, 9, 4, 10, 6, 10, 4, 6],
  [9, 5, 5, 4, 7, 6, 6, 11],
  [9, 5, 5, 4, 7, 6, 6, 11],
  [5, 0, 1, 5, 5, 4, 7, 6, 6, 11],
  [7, 6, 6, 11, 3, 4, 3, 5, 5, 4, 1, 5],
  [9, 5, 5, 4, 10, 1, 2, 10, 7, 6, 6, 11],
  [6, 11, 7, 6, 2, 10, 10, 1, 9, 5, 5, 4],
  [7, 6, 6, 11, 5, 4, 4, 10, 10, 5, 4, 2, 2, 10],
  [3, 4, 3, 5, 5, 4, 2, 5, 10, 5, 2, 10, 7, 6, 6, 11],
  [7, 2, 7, 6, 6, 2, 5, 4, 9, 5],
  [9, 5, 5, 4, 8, 6, 6, 0, 6, 2, 7, 6],
  [3, 6, 6, 2, 7, 6, 1, 5, 5, 0, 5, 4],
  [6, 2, 2, 8, 8, 6, 7, 6, 1, 8, 8, 5, 5, 4, 1, 5],
  [9, 5, 5, 4, 10, 1, 1, 6, 6, 10, 1, 7, 7, 6],
  [1, 6, 6, 10, 10, 1, 1, 7, 7, 6, 0, 7, 9, 5, 5, 4],
  [0, 10, 10, 4, 10, 5, 5, 4, 3, 10, 6, 10, 10, 7, 7, 6],
  [7, 6, 6, 10, 10, 7, 10, 8, 5, 4, 4, 10, 10, 5],
  [6, 9, 9, 5, 5, 6, 6, 11, 11, 9],
  [3, 6, 6, 11, 0, 6, 0, 5, 5, 6, 9, 5],
  [0, 11, 0, 5, 5, 11, 1, 5, 5, 6, 6, 11],
  [6, 11, 3, 6, 3, 5, 5, 6, 1, 5],
  [2, 10, 10, 1, 9, 5, 5, 11, 11, 9, 5, 6, 6, 11],
  [0, 11, 0, 6, 6, 11, 9, 6, 5, 6, 9, 5, 2, 10, 10, 1],
  [8, 5, 5, 11, 5, 6, 6, 11, 0, 5, 10, 5, 5, 2, 2, 10],
  [6, 11, 3, 6, 3, 5, 5, 6, 2, 10, 10, 3, 10, 5],
  [5, 8, 9, 5, 5, 2, 2, 8, 5, 6, 6, 2],
  [9, 5, 5, 6, 6, 9, 6, 0, 6, 2],
  [1, 5, 5, 8, 8, 1, 5, 6, 6, 8, 8, 2, 6, 2],
  [1, 5, 5, 6, 6, 1, 6, 2],
  [3, 6, 6, 1, 6, 10, 10, 1, 8, 6, 5, 6, 6, 9, 9, 5],
  [10, 1, 0, 10, 0, 6, 6, 10, 9, 5, 5, 0, 5, 6],
  [5, 6, 6, 10, 10, 5],
  [10, 5, 5, 6, 6, 10],
  [11, 5, 5, 10, 10, 11, 7, 5],
  [11, 5, 5, 10, 10, 11, 7, 5],
  [5, 11, 7, 5, 5, 10, 10, 11, 1, 9],
  [10, 7, 7, 5, 5, 10, 10, 11, 8, 1, 1, 9],
  [11, 1, 2, 11, 7, 1, 7, 5, 5, 1],
  [2, 7, 7, 1, 7, 5, 5, 1, 2, 11],
  [9, 7, 7, 5, 5, 9, 9, 2, 2, 7, 2, 11],
  [7, 5, 5, 2, 2, 7, 2, 11, 5, 9, 9, 2, 2, 8],
  [2, 5, 5, 10, 10, 2, 3, 5, 7, 5],
  [8, 2, 8, 5, 5, 2, 7, 5, 10, 2, 5, 10],
  [1, 9, 5, 10, 10, 3, 3, 5, 7, 5, 10, 2],
  [8, 2, 2, 9, 1, 9, 7, 2, 10, 2, 2, 5, 5, 10, 7, 5],
  [3, 5, 5, 1, 7, 5],
  [7, 0, 7, 1, 7, 5, 5, 1],
  [3, 9, 3, 5, 5, 9, 7, 5],
  [7, 9, 5, 9, 7, 5],
  [5, 8, 4, 5, 5, 10, 10, 8, 10, 11],
  [5, 0, 4, 5, 5, 11, 11, 0, 5, 10, 10, 11],
  [1, 9, 4, 10, 10, 8, 10, 11, 4, 5, 5, 10],
  [10, 11, 11, 4, 4, 10, 4, 5, 5, 10, 3, 4, 4, 1, 1, 9],
  [2, 5, 5, 1, 2, 8, 8, 5, 2, 11, 4, 5],
  [4, 11, 11, 0, 4, 5, 5, 11, 2, 11, 11, 1, 5, 1],
  [2, 5, 5, 0, 5, 9, 2, 11, 11, 5, 4, 5, 5, 8],
  [4, 5, 5, 9, 2, 11],
  [2, 5, 5, 10, 10, 2, 3, 5, 3, 4, 4, 5],
  [5, 10, 10, 2, 2, 5, 2, 4, 4, 5],
  [3, 10, 10, 2, 3, 5, 5, 10, 8, 5, 4, 5, 1, 9],
  [5, 10, 10, 2, 2, 5, 2, 4, 4, 5, 1, 9, 9, 2],
  [4, 5, 5, 8, 5, 3, 5, 1],
  [4, 5, 5, 0, 5, 1],
  [4, 5, 5, 8, 5, 3, 0, 5, 5, 9],
  [4, 5, 5, 9],
  [4, 11, 7, 4, 9, 11, 9, 10, 10, 11],
  [9, 7, 7, 4, 9, 11, 9, 10, 10, 11],
  [1, 10, 10, 11, 11, 1, 11, 4, 4, 1, 7, 4],
  [1, 4, 4, 3, 1, 10, 10, 4, 7, 4, 4, 11, 10, 11],
  [4, 11, 7, 4, 9, 11, 9, 2, 2, 11, 9, 1],
  [9, 7, 7, 4, 9, 11, 9, 1, 1, 11, 2, 11],
  [7, 4, 4, 11, 4, 2, 2, 11],
  [7, 4, 4, 11, 4, 2, 2, 11, 3, 4],
  [2, 9, 9, 10, 10, 2, 2, 7, 7, 9, 7, 4],
  [9, 10, 10, 7, 7, 9, 7, 4, 10, 2, 2, 7, 7, 0],
  [7, 10, 10, 3, 10, 2, 7, 4, 4, 10, 1, 10, 10, 0],
  [1, 10, 10, 2, 7, 4],
  [9, 1, 1, 4, 1, 7, 7, 4],
  [9, 1, 1, 4, 1, 7, 7, 4, 8, 1],
  [3, 4, 7, 4],
  [7, 4],
  [9, 10, 10, 8, 10, 11],
  [9, 3, 9, 11, 9, 10, 10, 11],
  [1, 10, 10, 0, 10, 8, 10, 11],
  [1, 10, 10, 3, 10, 11],
  [2, 11, 11, 1, 11, 9, 9, 1],
  [9, 3, 9, 11, 2, 9, 9, 1, 2, 11],
  [2, 11, 11, 0],
  [2, 11],
  [8, 2, 8, 10, 10, 2, 9, 10],
  [9, 10, 10, 2, 2, 9],
  [8, 2, 8, 10, 10, 2, 1, 8, 1, 10],
  [1, 10, 10, 2],
  [8, 1, 9, 1],
  [9, 1],
  [],
  []];

var segTable2 = [
  [],
  [],
  [1, 9],
  [1, 9],
  [2, 10, 10, 1],
  [2, 10, 10, 1],
  [2, 10, 10, 9],
  [2, 10, 10, 9],
  [11, 2],
  [11, 2],
  [1, 9, 11, 2],
  [11, 2, 1, 9],
  [10, 1, 11, 10],
  [10, 1, 11, 10],
  [11, 10, 10, 9],
  [10, 9, 11, 10],
  [4, 7],
  [4, 7],
  [1, 9, 4, 7],
  [1, 9, 4, 7],
  [2, 10, 10, 1, 4, 7],
  [4, 7, 2, 10, 10, 1],
  [2, 10, 10, 9, 4, 7],
  [2, 10, 10, 9, 4, 7],
  [4, 7, 11, 2],
  [4, 7, 11, 2],
  [1, 9, 4, 7, 11, 2],
  [4, 7, 11, 2, 1, 9],
  [10, 1, 11, 10, 4, 7],
  [11, 10, 10, 1, 4, 7],
  [4, 7, 11, 10, 10, 9],
  [4, 7, 11, 10, 10, 9],
  [9, 5, 5, 4],
  [9, 5, 5, 4],
  [5, 4, 1, 5],
  [5, 4, 1, 5],
  [2, 10, 10, 1, 9, 5, 5, 4],
  [2, 10, 10, 1, 9, 5, 5, 4],
  [2, 10, 10, 5, 5, 4],
  [2, 10, 10, 5, 5, 4],
  [9, 5, 5, 4, 11, 2],
  [11, 2, 9, 5, 5, 4],
  [5, 4, 1, 5, 11, 2],
  [1, 5, 11, 2, 5, 4],
  [11, 10, 10, 1, 9, 5, 5, 4],
  [9, 5, 5, 4, 10, 1, 11, 10],
  [5, 4, 11, 10, 10, 5],
  [5, 4, 10, 5, 11, 10],
  [5, 7, 9, 5],
  [9, 5, 5, 7],
  [1, 5, 5, 7],
  [1, 5, 5, 7],
  [9, 5, 5, 7, 10, 1, 2, 10],
  [10, 1, 2, 10, 9, 5, 5, 7],
  [5, 7, 10, 5, 2, 10],
  [2, 10, 10, 5, 5, 7],
  [9, 5, 5, 7, 11, 2],
  [9, 5, 5, 7, 11, 2],
  [11, 2, 1, 5, 5, 7],
  [11, 2, 1, 5, 5, 7],
  [9, 5, 5, 7, 10, 1, 11, 10],
  [5, 7, 9, 5, 10, 1, 11, 10],
  [11, 10, 10, 5, 5, 7],
  [11, 10, 10, 5, 5, 7],
  [10, 6, 6, 5, 5, 10],
  [5, 10, 10, 6, 6, 5],
  [1, 9, 5, 10, 10, 6, 6, 5],
  [1, 9, 5, 10, 10, 6, 6, 5],
  [6, 5, 5, 1, 2, 6],
  [6, 5, 5, 1, 2, 6],
  [6, 5, 5, 9, 2, 6],
  [5, 9, 2, 6, 6, 5],
  [11, 2, 10, 6, 6, 5, 5, 10],
  [11, 2, 10, 6, 6, 5, 5, 10],
  [1, 9, 11, 2, 5, 10, 10, 6, 6, 5],
  [5, 10, 10, 6, 6, 5, 1, 9, 11, 2],
  [11, 6, 6, 5, 5, 1],
  [5, 1, 11, 6, 6, 5],
  [11, 6, 6, 5, 5, 9],
  [6, 5, 5, 9, 11, 6],
  [5, 10, 10, 6, 6, 5, 4, 7],
  [4, 7, 6, 5, 5, 10, 10, 6],
  [1, 9, 5, 10, 10, 6, 6, 5, 4, 7],
  [10, 6, 6, 5, 5, 10, 1, 9, 4, 7],
  [2, 6, 6, 5, 5, 1, 4, 7],
  [5, 1, 2, 6, 6, 5, 4, 7],
  [4, 7, 5, 9, 6, 5, 2, 6],
  [4, 7, 5, 9, 6, 5, 2, 6],
  [11, 2, 4, 7, 10, 6, 6, 5, 5, 10],
  [5, 10, 10, 6, 6, 5, 4, 7, 11, 2],
  [1, 9, 4, 7, 11, 2, 5, 10, 10, 6, 6, 5],
  [1, 9, 11, 2, 4, 7, 5, 10, 10, 6, 6, 5],
  [4, 7, 5, 1, 11, 6, 6, 5],
  [5, 1, 11, 6, 6, 5, 4, 7],
  [5, 9, 6, 5, 11, 6, 4, 7],
  [6, 5, 5, 9, 11, 6, 4, 7],
  [9, 10, 6, 4, 10, 6],
  [10, 6, 6, 4, 9, 10],
  [1, 10, 10, 6, 6, 4],
  [6, 4, 1, 10, 10, 6],
  [9, 1, 2, 6, 6, 4],
  [9, 1, 2, 6, 6, 4],
  [2, 6, 6, 4],
  [2, 6, 6, 4],
  [9, 10, 10, 6, 6, 4, 11, 2],
  [11, 2, 9, 10, 10, 6, 6, 4],
  [11, 2, 6, 4, 1, 10, 10, 6],
  [6, 4, 1, 10, 10, 6, 11, 2],
  [6, 4, 9, 1, 11, 6],
  [11, 6, 9, 1, 6, 4],
  [11, 6, 6, 4],
  [6, 4, 11, 6],
  [10, 6, 6, 7, 9, 10],
  [9, 10, 6, 7, 10, 6],
  [10, 6, 6, 7, 1, 10],
  [10, 6, 6, 7, 1, 10],
  [2, 6, 9, 1, 6, 7],
  [2, 6, 9, 1, 6, 7],
  [6, 7, 2, 6],
  [6, 7, 2, 6],
  [11, 2, 10, 6, 9, 10, 6, 7],
  [11, 2, 6, 7, 10, 6, 9, 10],
  [1, 10, 6, 7, 10, 6, 11, 2],
  [11, 2, 10, 6, 1, 10, 6, 7],
  [6, 7, 9, 1, 11, 6],
  [9, 1, 11, 6, 6, 7],
  [6, 7, 11, 6],
  [11, 6, 6, 7],
  [7, 6, 6, 11],
  [7, 6, 6, 11],
  [1, 9, 7, 6, 6, 11],
  [1, 9, 7, 6, 6, 11],
  [10, 1, 2, 10, 6, 11, 7, 6],
  [2, 10, 10, 1, 6, 11, 7, 6],
  [2, 10, 10, 9, 6, 11, 7, 6],
  [6, 11, 7, 6, 2, 10, 10, 9],
  [6, 2, 7, 6],
  [7, 6, 6, 2],
  [7, 6, 6, 2, 1, 9],
  [6, 2, 1, 9, 7, 6],
  [7, 6, 6, 10, 10, 1],
  [7, 6, 6, 10, 10, 1],
  [10, 9, 6, 10, 7, 6],
  [7, 6, 6, 10, 10, 9],
  [4, 6, 6, 11],
  [6, 11, 4, 6],
  [6, 11, 4, 6, 1, 9],
  [4, 6, 1, 9, 6, 11],
  [4, 6, 6, 11, 2, 10, 10, 1],
  [2, 10, 10, 1, 6, 11, 4, 6],
  [4, 6, 6, 11, 2, 10, 10, 9],
  [10, 9, 2, 10, 6, 11, 4, 6],
  [4, 6, 6, 2],
  [4, 6, 6, 2],
  [1, 9, 4, 6, 6, 2],
  [1, 9, 4, 6, 6, 2],
  [4, 6, 6, 10, 10, 1],
  [10, 1, 6, 10, 4, 6],
  [4, 6, 6, 10, 10, 9],
  [10, 9, 6, 10, 4, 6],
  [9, 5, 5, 4, 7, 6, 6, 11],
  [9, 5, 5, 4, 7, 6, 6, 11],
  [1, 5, 5, 4, 7, 6, 6, 11],
  [7, 6, 6, 11, 5, 4, 1, 5],
  [9, 5, 5, 4, 10, 1, 2, 10, 7, 6, 6, 11],
  [6, 11, 7, 6, 2, 10, 10, 1, 9, 5, 5, 4],
  [7, 6, 6, 11, 5, 4, 10, 5, 2, 10],
  [5, 4, 10, 5, 2, 10, 7, 6, 6, 11],
  [7, 6, 6, 2, 5, 4, 9, 5],
  [9, 5, 5, 4, 6, 2, 7, 6],
  [6, 2, 7, 6, 1, 5, 5, 4],
  [6, 2, 7, 6, 5, 4, 1, 5],
  [9, 5, 5, 4, 10, 1, 6, 10, 7, 6],
  [6, 10, 10, 1, 7, 6, 9, 5, 5, 4],
  [10, 5, 5, 4, 6, 10, 7, 6],
  [7, 6, 6, 10, 5, 4, 10, 5],
  [9, 5, 5, 6, 6, 11],
  [6, 11, 5, 6, 9, 5],
  [1, 5, 5, 6, 6, 11],
  [6, 11, 5, 6, 1, 5],
  [2, 10, 10, 1, 9, 5, 5, 6, 6, 11],
  [6, 11, 5, 6, 9, 5, 2, 10, 10, 1],
  [5, 6, 6, 11, 10, 5, 2, 10],
  [6, 11, 5, 6, 2, 10, 10, 5],
  [9, 5, 5, 6, 6, 2],
  [9, 5, 5, 6, 6, 2],
  [1, 5, 5, 6, 6, 2],
  [1, 5, 5, 6, 6, 2],
  [6, 10, 10, 1, 5, 6, 9, 5],
  [10, 1, 6, 10, 9, 5, 5, 6],
  [5, 6, 6, 10, 10, 5],
  [10, 5, 5, 6, 6, 10],
  [5, 10, 10, 11, 7, 5],
  [5, 10, 10, 11, 7, 5],
  [7, 5, 5, 10, 10, 11, 1, 9],
  [7, 5, 5, 10, 10, 11, 1, 9],
  [2, 11, 7, 5, 5, 1],
  [7, 5, 5, 1, 2, 11],
  [7, 5, 5, 9, 2, 11],
  [7, 5, 2, 11, 5, 9],
  [5, 10, 10, 2, 7, 5],
  [7, 5, 10, 2, 5, 10],
  [1, 9, 5, 10, 7, 5, 10, 2],
  [1, 9, 10, 2, 5, 10, 7, 5],
  [5, 1, 7, 5],
  [7, 5, 5, 1],
  [5, 9, 7, 5],
  [5, 9, 7, 5],
  [4, 5, 5, 10, 10, 11],
  [4, 5, 5, 10, 10, 11],
  [1, 9, 10, 11, 4, 5, 5, 10],
  [10, 11, 4, 5, 5, 10, 1, 9],
  [5, 1, 2, 11, 4, 5],
  [4, 5, 2, 11, 5, 1],
  [5, 9, 2, 11, 4, 5],
  [4, 5, 5, 9, 2, 11],
  [5, 10, 10, 2, 4, 5],
  [5, 10, 10, 2, 4, 5],
  [10, 2, 5, 10, 4, 5, 1, 9],
  [5, 10, 10, 2, 4, 5, 1, 9],
  [4, 5, 5, 1],
  [4, 5, 5, 1],
  [4, 5, 5, 9],
  [4, 5, 5, 9],
  [7, 4, 9, 10, 10, 11],
  [7, 4, 9, 10, 10, 11],
  [1, 10, 10, 11, 7, 4],
  [1, 10, 7, 4, 10, 11],
  [7, 4, 2, 11, 9, 1],
  [7, 4, 9, 1, 2, 11],
  [7, 4, 2, 11],
  [7, 4, 2, 11],
  [9, 10, 10, 2, 7, 4],
  [9, 10, 7, 4, 10, 2],
  [10, 2, 7, 4, 1, 10],
  [1, 10, 10, 2, 7, 4],
  [9, 1, 7, 4],
  [9, 1, 7, 4],
  [7, 4],
  [7, 4],
  [9, 10, 10, 11],
  [9, 10, 10, 11],
  [1, 10, 10, 11],
  [1, 10, 10, 11],
  [2, 11, 9, 1],
  [9, 1, 2, 11],
  [2, 11],
  [2, 11],
  [10, 2, 9, 10],
  [9, 10, 10, 2],
  [10, 2, 1, 10],
  [1, 10, 10, 2],
  [9, 1],
  [9, 1],
  [],
  []];

var cubeVerts = [[0,0,0], [1,0,0], [1,1,0], [0,1,0],
                 [0,0,1], [1,0,1], [1,1,1], [0,1,1]];
var edgeIndex = [[0,1], [1,2], [2,3], [3,0], [4,5], [5,6],
                 [6,7], [7,4], [0,4], [1,5], [2,6], [3,7]];
// edge directions: [x, y, -x, -y, x, y, -x, -y, z, z, z, z]

function check_input(dims, values, points) {
  if (dims[0] <= 0 || dims[1] <= 0 || dims[2] <= 0) {
    throw Error('Grid dimensions are zero along at least one edge');
  }
  var size_xyz = dims[0] * dims[1] * dims[2];
  if (values.length !== size_xyz || points.length !== size_xyz) {
    throw Error('isosurface: array size mismatch');
  }
}

// return offsets relative to vertex [0,0,0]
function calculate_vert_offsets(dims) {
  var vert_offsets = [];
  for (var i = 0; i < 8; ++i) {
    var v = cubeVerts[i];
    vert_offsets.push(v[0] + dims[2] * (v[1] + dims[1] * v[2]));
  }
  return vert_offsets;
}


function marching_cubes(dims, values, points, isolevel, method) {
  var snap = (method === 'snapped MC');
  var seg_table = (method === 'squarish' ? segTable2 : segTable);
  var vlist = new Array(12);
  var vert_offsets = calculate_vert_offsets(dims);
  var vertex_values = new Float32Array(8);
  var p0 = [0, 0, 0]; // initial value - never used, but makes Flow happy
  var vertex_points = [p0, p0, p0, p0, p0, p0, p0, p0];
  var size_x = dims[0];
  var size_y = dims[1];
  var size_z = dims[2];
  var vertices = [];
  var segments = [];
  var vertex_count = 0;
  for (var x = 0; x < size_x - 1; x++) {
    for (var y = 0; y < size_y - 1; y++) {
      for (var z = 0; z < size_z - 1; z++) {
        var offset0 = z + size_z * (y + size_y * x);
        var cubeindex = 0;
        var i, j;
        for (i = 0; i < 8; ++i) {
          j = offset0 + vert_offsets[i];
          cubeindex |= (values[j] < isolevel) ? 1 << i : 0;
        }
        if (cubeindex === 0 || cubeindex === 255) continue;
        for (i = 0; i < 8; ++i) {
          j = offset0 + vert_offsets[i];
          vertex_values[i] = values[j];
          vertex_points[i] = points[j];
        }

        // 12 bit number, indicates which edges are crossed by the isosurface
        var edge_mask = edgeTable[cubeindex];

        // check which edges are crossed, and estimate the point location
        // using a weighted average of scalar values at edge endpoints.
        for (i = 0; i < 12; ++i) {
          if ((edge_mask & (1 << i)) !== 0) {
            var e = edgeIndex[i];
            var mu = (isolevel - vertex_values[e[0]]) /
                     (vertex_values[e[1]] - vertex_values[e[0]]);
            if (snap === true) {
              if (mu > 0.85) mu = 1;
              else if (mu < 0.15) mu = 0;
            }
            var p1 = vertex_points[e[0]];
            var p2 = vertex_points[e[1]];
            // The number of added vertices could be roughly halved
            // if we avoided duplicates between neighbouring cells.
            // Using a map for lookups is too slow, perhaps a big
            // array would do?
            vertices.push(p1[0] + (p2[0] - p1[0]) * mu,
                          p1[1] + (p2[1] - p1[1]) * mu,
                          p1[2] + (p2[2] - p1[2]) * mu);
            vlist[i] = vertex_count++;
          }
        }
        var t = seg_table[cubeindex];
        for (i = 0; i < t.length; i++) {
          segments.push(vlist[t[i]]);
        }
      }
    }
  }
  return { vertices: vertices, segments: segments };
}

export function isosurface(dims /*: [number, number, number]*/,
                           values /*: number[]*/,
                           points /*: Array<[number, number, number]>*/,
                           isolevel /*: number*/,
                           method /*: string*/) {
  check_input(dims, values, points);
  //if (method === 'marching tetrahedra') {
  //  return marching_tetrahedra(dims, values, points, isolevel);
  //}
  return marching_cubes(dims, values, points, isolevel, method);
}

