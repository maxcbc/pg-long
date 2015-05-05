let TEST_SUB_BITS = [
      0x00000000, 0x00000000, 0xc8892a0a, 0xa9cb1d25, 0x80100000, 0x00000001,
      0x80100000, 0x00000000, 0x80010000, 0x00000001, 0x80010000, 0x00000000,
      0x80000001, 0x00000001, 0x80000001, 0x00000000, 0x80000000, 0x01000001,
      0x80000000, 0x01000000, 0x80000000, 0x00010001, 0x80000000, 0x00010000,
      0x80000000, 0x00008001, 0x80000000, 0x00008000, 0x80000000, 0x00000002,
      0x80000000, 0x00000001, 0x80000000, 0x00000000, 0x7fffffff, 0xffffffff,
      0x7fffffff, 0xfffffffe, 0x7fffffff, 0xffff8001, 0x7fffffff, 0xffff8000,
      0x7fffffff, 0xffff0001, 0x7fffffff, 0xffff0000, 0x7fffffff, 0xff000001,
      0x7fffffff, 0xff000000, 0x7fffffff, 0xa9cb1d25, 0x7fffffff, 0x48892a0b,
      0x7fffffff, 0x00000001, 0x7fffffff, 0x00000000, 0x7fff0000, 0x00000001,
      0x7fff0000, 0x00000000, 0x7ff00000, 0x00000001, 0x7ff00000, 0x00000000,
      0x29cb1d24, 0x48892a0b, 0x00000000, 0x00000001, 0x3776d5f5, 0x5634e2db,
      0x00000000, 0x00000000, 0xb786d5f5, 0x5634e2dc, 0xb786d5f5, 0x5634e2db,
      0xb777d5f5, 0x5634e2dc, 0xb777d5f5, 0x5634e2db, 0xb776d5f6, 0x5634e2dc,
      0xb776d5f6, 0x5634e2db, 0xb776d5f5, 0x5734e2dc, 0xb776d5f5, 0x5734e2db,
      0xb776d5f5, 0x5635e2dc, 0xb776d5f5, 0x5635e2db, 0xb776d5f5, 0x563562dc,
      0xb776d5f5, 0x563562db, 0xb776d5f5, 0x5634e2dd, 0xb776d5f5, 0x5634e2dc,
      0xb776d5f5, 0x5634e2db, 0xb776d5f5, 0x5634e2da, 0xb776d5f5, 0x5634e2d9,
      0xb776d5f5, 0x563462dc, 0xb776d5f5, 0x563462db, 0xb776d5f5, 0x5633e2dc,
      0xb776d5f5, 0x5633e2db, 0xb776d5f5, 0x5534e2dc, 0xb776d5f5, 0x5534e2db,
      0xb776d5f5, 0x00000000, 0xb776d5f4, 0x9ebe0ce6, 0xb776d5f4, 0x5634e2dc,
      0xb776d5f4, 0x5634e2db, 0xb775d5f5, 0x5634e2dc, 0xb775d5f5, 0x5634e2db,
      0xb766d5f5, 0x5634e2dc, 0xb766d5f5, 0x5634e2db, 0x6141f319, 0x9ebe0ce6,
      0x3776d5f5, 0x5634e2dc, 0x7fefffff, 0xffffffff, 0x48792a0a, 0xa9cb1d24,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xfff10000, 0x00000000,
      0xfff0ffff, 0xffffffff, 0xfff00001, 0x00000000, 0xfff00000, 0xffffffff,
      0xfff00000, 0x01000000, 0xfff00000, 0x00ffffff, 0xfff00000, 0x00010000,
      0xfff00000, 0x0000ffff, 0xfff00000, 0x00008000, 0xfff00000, 0x00007fff,
      0xfff00000, 0x00000001, 0xfff00000, 0x00000000, 0xffefffff, 0xffffffff,
      0xffefffff, 0xfffffffe, 0xffefffff, 0xfffffffd, 0xffefffff, 0xffff8000,
      0xffefffff, 0xffff7fff, 0xffefffff, 0xffff0000, 0xffefffff, 0xfffeffff,
      0xffefffff, 0xff000000, 0xffefffff, 0xfeffffff, 0xffefffff, 0xa9cb1d24,
      0xffefffff, 0x48892a0a, 0xffefffff, 0x00000000, 0xffeffffe, 0xffffffff,
      0xffef0000, 0x00000000, 0xffeeffff, 0xffffffff, 0xffe00000, 0x00000000,
      0xffdfffff, 0xffffffff, 0xa9bb1d24, 0x48892a0a, 0x7ff00000, 0x00000000,
      0x7ff00000, 0x00000000, 0x48792a0a, 0xa9cb1d25, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xfff10000, 0x00000001, 0xfff10000, 0x00000000,
      0xfff00001, 0x00000001, 0xfff00001, 0x00000000, 0xfff00000, 0x01000001,
      0xfff00000, 0x01000000, 0xfff00000, 0x00010001, 0xfff00000, 0x00010000,
      0xfff00000, 0x00008001, 0xfff00000, 0x00008000, 0xfff00000, 0x00000002,
      0xfff00000, 0x00000001, 0xfff00000, 0x00000000, 0xffefffff, 0xffffffff,
      0xffefffff, 0xfffffffe, 0xffefffff, 0xffff8001, 0xffefffff, 0xffff8000,
      0xffefffff, 0xffff0001, 0xffefffff, 0xffff0000, 0xffefffff, 0xff000001,
      0xffefffff, 0xff000000, 0xffefffff, 0xa9cb1d25, 0xffefffff, 0x48892a0b,
      0xffefffff, 0x00000001, 0xffefffff, 0x00000000, 0xffef0000, 0x00000001,
      0xffef0000, 0x00000000, 0xffe00000, 0x00000001, 0xffe00000, 0x00000000,
      0xa9bb1d24, 0x48892a0b, 0x7ff00000, 0x00000001, 0x7ffeffff, 0xffffffff,
      0x48882a0a, 0xa9cb1d24, 0x000f0000, 0x00000000, 0x000effff, 0xffffffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffff0001, 0x00000000,
      0xffff0000, 0xffffffff, 0xffff0000, 0x01000000, 0xffff0000, 0x00ffffff,
      0xffff0000, 0x00010000, 0xffff0000, 0x0000ffff, 0xffff0000, 0x00008000,
      0xffff0000, 0x00007fff, 0xffff0000, 0x00000001, 0xffff0000, 0x00000000,
      0xfffeffff, 0xffffffff, 0xfffeffff, 0xfffffffe, 0xfffeffff, 0xfffffffd,
      0xfffeffff, 0xffff8000, 0xfffeffff, 0xffff7fff, 0xfffeffff, 0xffff0000,
      0xfffeffff, 0xfffeffff, 0xfffeffff, 0xff000000, 0xfffeffff, 0xfeffffff,
      0xfffeffff, 0xa9cb1d24, 0xfffeffff, 0x48892a0a, 0xfffeffff, 0x00000000,
      0xfffefffe, 0xffffffff, 0xfffe0000, 0x00000000, 0xfffdffff, 0xffffffff,
      0xffef0000, 0x00000000, 0xffeeffff, 0xffffffff, 0xa9ca1d24, 0x48892a0a,
      0x7fff0000, 0x00000000, 0x7fff0000, 0x00000000, 0x48882a0a, 0xa9cb1d25,
      0x000f0000, 0x00000001, 0x000f0000, 0x00000000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffff0001, 0x00000001, 0xffff0001, 0x00000000,
      0xffff0000, 0x01000001, 0xffff0000, 0x01000000, 0xffff0000, 0x00010001,
      0xffff0000, 0x00010000, 0xffff0000, 0x00008001, 0xffff0000, 0x00008000,
      0xffff0000, 0x00000002, 0xffff0000, 0x00000001, 0xffff0000, 0x00000000,
      0xfffeffff, 0xffffffff, 0xfffeffff, 0xfffffffe, 0xfffeffff, 0xffff8001,
      0xfffeffff, 0xffff8000, 0xfffeffff, 0xffff0001, 0xfffeffff, 0xffff0000,
      0xfffeffff, 0xff000001, 0xfffeffff, 0xff000000, 0xfffeffff, 0xa9cb1d25,
      0xfffeffff, 0x48892a0b, 0xfffeffff, 0x00000001, 0xfffeffff, 0x00000000,
      0xfffe0000, 0x00000001, 0xfffe0000, 0x00000000, 0xffef0000, 0x00000001,
      0xffef0000, 0x00000000, 0xa9ca1d24, 0x48892a0b, 0x7fff0000, 0x00000001,
      0x7ffffffe, 0xffffffff, 0x48892a09, 0xa9cb1d24, 0x000fffff, 0x00000000,
      0x000ffffe, 0xffffffff, 0x0000ffff, 0x00000000, 0x0000fffe, 0xffffffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0x01000000,
      0xffffffff, 0x00ffffff, 0xffffffff, 0x00010000, 0xffffffff, 0x0000ffff,
      0xffffffff, 0x00008000, 0xffffffff, 0x00007fff, 0xffffffff, 0x00000001,
      0xffffffff, 0x00000000, 0xfffffffe, 0xffffffff, 0xfffffffe, 0xfffffffe,
      0xfffffffe, 0xfffffffd, 0xfffffffe, 0xffff8000, 0xfffffffe, 0xffff7fff,
      0xfffffffe, 0xffff0000, 0xfffffffe, 0xfffeffff, 0xfffffffe, 0xff000000,
      0xfffffffe, 0xfeffffff, 0xfffffffe, 0xa9cb1d24, 0xfffffffe, 0x48892a0a,
      0xfffffffe, 0x00000000, 0xfffffffd, 0xffffffff, 0xfffeffff, 0x00000000,
      0xfffefffe, 0xffffffff, 0xffefffff, 0x00000000, 0xffeffffe, 0xffffffff,
      0xa9cb1d23, 0x48892a0a, 0x7fffffff, 0x00000000, 0x7fffffff, 0x00000000,
      0x48892a09, 0xa9cb1d25, 0x000fffff, 0x00000001, 0x000fffff, 0x00000000,
      0x0000ffff, 0x00000001, 0x0000ffff, 0x00000000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0x01000001, 0xffffffff, 0x01000000,
      0xffffffff, 0x00010001, 0xffffffff, 0x00010000, 0xffffffff, 0x00008001,
      0xffffffff, 0x00008000, 0xffffffff, 0x00000002, 0xffffffff, 0x00000001,
      0xffffffff, 0x00000000, 0xfffffffe, 0xffffffff, 0xfffffffe, 0xfffffffe,
      0xfffffffe, 0xffff8001, 0xfffffffe, 0xffff8000, 0xfffffffe, 0xffff0001,
      0xfffffffe, 0xffff0000, 0xfffffffe, 0xff000001, 0xfffffffe, 0xff000000,
      0xfffffffe, 0xa9cb1d25, 0xfffffffe, 0x48892a0b, 0xfffffffe, 0x00000001,
      0xfffffffe, 0x00000000, 0xfffeffff, 0x00000001, 0xfffeffff, 0x00000000,
      0xffefffff, 0x00000001, 0xffefffff, 0x00000000, 0xa9cb1d23, 0x48892a0b,
      0x7fffffff, 0x00000001, 0x7fffffff, 0xfeffffff, 0x48892a0a, 0xa8cb1d24,
      0x000fffff, 0xff000000, 0x000fffff, 0xfeffffff, 0x0000ffff, 0xff000000,
      0x0000ffff, 0xfeffffff, 0x00000000, 0xff000000, 0x00000000, 0xfeffffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xff010000,
      0xffffffff, 0xff00ffff, 0xffffffff, 0xff008000, 0xffffffff, 0xff007fff,
      0xffffffff, 0xff000001, 0xffffffff, 0xff000000, 0xffffffff, 0xfeffffff,
      0xffffffff, 0xfefffffe, 0xffffffff, 0xfefffffd, 0xffffffff, 0xfeff8000,
      0xffffffff, 0xfeff7fff, 0xffffffff, 0xfeff0000, 0xffffffff, 0xfefeffff,
      0xffffffff, 0xfe000000, 0xffffffff, 0xfdffffff, 0xffffffff, 0xa8cb1d24,
      0xffffffff, 0x47892a0a, 0xfffffffe, 0xff000000, 0xfffffffe, 0xfeffffff,
      0xfffeffff, 0xff000000, 0xfffeffff, 0xfeffffff, 0xffefffff, 0xff000000,
      0xffefffff, 0xfeffffff, 0xa9cb1d24, 0x47892a0a, 0x7fffffff, 0xff000000,
      0x7fffffff, 0xff000000, 0x48892a0a, 0xa8cb1d25, 0x000fffff, 0xff000001,
      0x000fffff, 0xff000000, 0x0000ffff, 0xff000001, 0x0000ffff, 0xff000000,
      0x00000000, 0xff000001, 0x00000000, 0xff000000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xff010001, 0xffffffff, 0xff010000,
      0xffffffff, 0xff008001, 0xffffffff, 0xff008000, 0xffffffff, 0xff000002,
      0xffffffff, 0xff000001, 0xffffffff, 0xff000000, 0xffffffff, 0xfeffffff,
      0xffffffff, 0xfefffffe, 0xffffffff, 0xfeff8001, 0xffffffff, 0xfeff8000,
      0xffffffff, 0xfeff0001, 0xffffffff, 0xfeff0000, 0xffffffff, 0xfe000001,
      0xffffffff, 0xfe000000, 0xffffffff, 0xa8cb1d25, 0xffffffff, 0x47892a0b,
      0xfffffffe, 0xff000001, 0xfffffffe, 0xff000000, 0xfffeffff, 0xff000001,
      0xfffeffff, 0xff000000, 0xffefffff, 0xff000001, 0xffefffff, 0xff000000,
      0xa9cb1d24, 0x47892a0b, 0x7fffffff, 0xff000001, 0x7fffffff, 0xfffeffff,
      0x48892a0a, 0xa9ca1d24, 0x000fffff, 0xffff0000, 0x000fffff, 0xfffeffff,
      0x0000ffff, 0xffff0000, 0x0000ffff, 0xfffeffff, 0x00000000, 0xffff0000,
      0x00000000, 0xfffeffff, 0x00000000, 0x00ff0000, 0x00000000, 0x00feffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xffff8000,
      0xffffffff, 0xffff7fff, 0xffffffff, 0xffff0001, 0xffffffff, 0xffff0000,
      0xffffffff, 0xfffeffff, 0xffffffff, 0xfffefffe, 0xffffffff, 0xfffefffd,
      0xffffffff, 0xfffe8000, 0xffffffff, 0xfffe7fff, 0xffffffff, 0xfffe0000,
      0xffffffff, 0xfffdffff, 0xffffffff, 0xfeff0000, 0xffffffff, 0xfefeffff,
      0xffffffff, 0xa9ca1d24, 0xffffffff, 0x48882a0a, 0xfffffffe, 0xffff0000,
      0xfffffffe, 0xfffeffff, 0xfffeffff, 0xffff0000, 0xfffeffff, 0xfffeffff,
      0xffefffff, 0xffff0000, 0xffefffff, 0xfffeffff, 0xa9cb1d24, 0x48882a0a,
      0x7fffffff, 0xffff0000, 0x7fffffff, 0xffff0000, 0x48892a0a, 0xa9ca1d25,
      0x000fffff, 0xffff0001, 0x000fffff, 0xffff0000, 0x0000ffff, 0xffff0001,
      0x0000ffff, 0xffff0000, 0x00000000, 0xffff0001, 0x00000000, 0xffff0000,
      0x00000000, 0x00ff0001, 0x00000000, 0x00ff0000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffff8001, 0xffffffff, 0xffff8000,
      0xffffffff, 0xffff0002, 0xffffffff, 0xffff0001, 0xffffffff, 0xffff0000,
      0xffffffff, 0xfffeffff, 0xffffffff, 0xfffefffe, 0xffffffff, 0xfffe8001,
      0xffffffff, 0xfffe8000, 0xffffffff, 0xfffe0001, 0xffffffff, 0xfffe0000,
      0xffffffff, 0xfeff0001, 0xffffffff, 0xfeff0000, 0xffffffff, 0xa9ca1d25,
      0xffffffff, 0x48882a0b, 0xfffffffe, 0xffff0001, 0xfffffffe, 0xffff0000,
      0xfffeffff, 0xffff0001, 0xfffeffff, 0xffff0000, 0xffefffff, 0xffff0001,
      0xffefffff, 0xffff0000, 0xa9cb1d24, 0x48882a0b, 0x7fffffff, 0xffff0001,
      0x7fffffff, 0xffff7fff, 0x48892a0a, 0xa9ca9d24, 0x000fffff, 0xffff8000,
      0x000fffff, 0xffff7fff, 0x0000ffff, 0xffff8000, 0x0000ffff, 0xffff7fff,
      0x00000000, 0xffff8000, 0x00000000, 0xffff7fff, 0x00000000, 0x00ff8000,
      0x00000000, 0x00ff7fff, 0x00000000, 0x00008000, 0x00000000, 0x00007fff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xffff8001,
      0xffffffff, 0xffff8000, 0xffffffff, 0xffff7fff, 0xffffffff, 0xffff7ffe,
      0xffffffff, 0xffff7ffd, 0xffffffff, 0xffff0000, 0xffffffff, 0xfffeffff,
      0xffffffff, 0xfffe8000, 0xffffffff, 0xfffe7fff, 0xffffffff, 0xfeff8000,
      0xffffffff, 0xfeff7fff, 0xffffffff, 0xa9ca9d24, 0xffffffff, 0x4888aa0a,
      0xfffffffe, 0xffff8000, 0xfffffffe, 0xffff7fff, 0xfffeffff, 0xffff8000,
      0xfffeffff, 0xffff7fff, 0xffefffff, 0xffff8000, 0xffefffff, 0xffff7fff,
      0xa9cb1d24, 0x4888aa0a, 0x7fffffff, 0xffff8000, 0x7fffffff, 0xffff8000,
      0x48892a0a, 0xa9ca9d25, 0x000fffff, 0xffff8001, 0x000fffff, 0xffff8000,
      0x0000ffff, 0xffff8001, 0x0000ffff, 0xffff8000, 0x00000000, 0xffff8001,
      0x00000000, 0xffff8000, 0x00000000, 0x00ff8001, 0x00000000, 0x00ff8000,
      0x00000000, 0x00008001, 0x00000000, 0x00008000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffff8002, 0xffffffff, 0xffff8001,
      0xffffffff, 0xffff8000, 0xffffffff, 0xffff7fff, 0xffffffff, 0xffff7ffe,
      0xffffffff, 0xffff0001, 0xffffffff, 0xffff0000, 0xffffffff, 0xfffe8001,
      0xffffffff, 0xfffe8000, 0xffffffff, 0xfeff8001, 0xffffffff, 0xfeff8000,
      0xffffffff, 0xa9ca9d25, 0xffffffff, 0x4888aa0b, 0xfffffffe, 0xffff8001,
      0xfffffffe, 0xffff8000, 0xfffeffff, 0xffff8001, 0xfffeffff, 0xffff8000,
      0xffefffff, 0xffff8001, 0xffefffff, 0xffff8000, 0xa9cb1d24, 0x4888aa0b,
      0x7fffffff, 0xffff8001, 0x7fffffff, 0xfffffffe, 0x48892a0a, 0xa9cb1d23,
      0x000fffff, 0xffffffff, 0x000fffff, 0xfffffffe, 0x0000ffff, 0xffffffff,
      0x0000ffff, 0xfffffffe, 0x00000000, 0xffffffff, 0x00000000, 0xfffffffe,
      0x00000000, 0x00ffffff, 0x00000000, 0x00fffffe, 0x00000000, 0x0000ffff,
      0x00000000, 0x0000fffe, 0x00000000, 0x00007fff, 0x00000000, 0x00007ffe,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xfffffffd, 0xffffffff, 0xfffffffc, 0xffffffff, 0xffff7fff,
      0xffffffff, 0xffff7ffe, 0xffffffff, 0xfffeffff, 0xffffffff, 0xfffefffe,
      0xffffffff, 0xfeffffff, 0xffffffff, 0xfefffffe, 0xffffffff, 0xa9cb1d23,
      0xffffffff, 0x48892a09, 0xfffffffe, 0xffffffff, 0xfffffffe, 0xfffffffe,
      0xfffeffff, 0xffffffff, 0xfffeffff, 0xfffffffe, 0xffefffff, 0xffffffff,
      0xffefffff, 0xfffffffe, 0xa9cb1d24, 0x48892a09, 0x7fffffff, 0xffffffff,
      0x7fffffff, 0xffffffff, 0x48892a0a, 0xa9cb1d24, 0x00100000, 0x00000000,
      0x000fffff, 0xffffffff, 0x00010000, 0x00000000, 0x0000ffff, 0xffffffff,
      0x00000001, 0x00000000, 0x00000000, 0xffffffff, 0x00000000, 0x01000000,
      0x00000000, 0x00ffffff, 0x00000000, 0x00010000, 0x00000000, 0x0000ffff,
      0x00000000, 0x00008000, 0x00000000, 0x00007fff, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xfffffffd, 0xffffffff, 0xffff8000, 0xffffffff, 0xffff7fff,
      0xffffffff, 0xffff0000, 0xffffffff, 0xfffeffff, 0xffffffff, 0xff000000,
      0xffffffff, 0xfeffffff, 0xffffffff, 0xa9cb1d24, 0xffffffff, 0x48892a0a,
      0xffffffff, 0x00000000, 0xfffffffe, 0xffffffff, 0xffff0000, 0x00000000,
      0xfffeffff, 0xffffffff, 0xfff00000, 0x00000000, 0xffefffff, 0xffffffff,
      0xa9cb1d24, 0x48892a0a, 0x80000000, 0x00000000, 0x80000000, 0x00000000,
      0x48892a0a, 0xa9cb1d25, 0x00100000, 0x00000001, 0x00100000, 0x00000000,
      0x00010000, 0x00000001, 0x00010000, 0x00000000, 0x00000001, 0x00000001,
      0x00000001, 0x00000000, 0x00000000, 0x01000001, 0x00000000, 0x01000000,
      0x00000000, 0x00010001, 0x00000000, 0x00010000, 0x00000000, 0x00008001,
      0x00000000, 0x00008000, 0x00000000, 0x00000002, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xffff8001, 0xffffffff, 0xffff8000, 0xffffffff, 0xffff0001,
      0xffffffff, 0xffff0000, 0xffffffff, 0xff000001, 0xffffffff, 0xff000000,
      0xffffffff, 0xa9cb1d25, 0xffffffff, 0x48892a0b, 0xffffffff, 0x00000001,
      0xffffffff, 0x00000000, 0xffff0000, 0x00000001, 0xffff0000, 0x00000000,
      0xfff00000, 0x00000001, 0xfff00000, 0x00000000, 0xa9cb1d24, 0x48892a0b,
      0x80000000, 0x00000001, 0x80000000, 0x00000001, 0x48892a0a, 0xa9cb1d26,
      0x00100000, 0x00000002, 0x00100000, 0x00000001, 0x00010000, 0x00000002,
      0x00010000, 0x00000001, 0x00000001, 0x00000002, 0x00000001, 0x00000001,
      0x00000000, 0x01000002, 0x00000000, 0x01000001, 0x00000000, 0x00010002,
      0x00000000, 0x00010001, 0x00000000, 0x00008002, 0x00000000, 0x00008001,
      0x00000000, 0x00000003, 0x00000000, 0x00000002, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xffff8002,
      0xffffffff, 0xffff8001, 0xffffffff, 0xffff0002, 0xffffffff, 0xffff0001,
      0xffffffff, 0xff000002, 0xffffffff, 0xff000001, 0xffffffff, 0xa9cb1d26,
      0xffffffff, 0x48892a0c, 0xffffffff, 0x00000002, 0xffffffff, 0x00000001,
      0xffff0000, 0x00000002, 0xffff0000, 0x00000001, 0xfff00000, 0x00000002,
      0xfff00000, 0x00000001, 0xa9cb1d24, 0x48892a0c, 0x80000000, 0x00000002,
      0x80000000, 0x00000002, 0x48892a0a, 0xa9cb1d27, 0x00100000, 0x00000003,
      0x00100000, 0x00000002, 0x00010000, 0x00000003, 0x00010000, 0x00000002,
      0x00000001, 0x00000003, 0x00000001, 0x00000002, 0x00000000, 0x01000003,
      0x00000000, 0x01000002, 0x00000000, 0x00010003, 0x00000000, 0x00010002,
      0x00000000, 0x00008003, 0x00000000, 0x00008002, 0x00000000, 0x00000004,
      0x00000000, 0x00000003, 0x00000000, 0x00000002, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffff8003, 0xffffffff, 0xffff8002,
      0xffffffff, 0xffff0003, 0xffffffff, 0xffff0002, 0xffffffff, 0xff000003,
      0xffffffff, 0xff000002, 0xffffffff, 0xa9cb1d27, 0xffffffff, 0x48892a0d,
      0xffffffff, 0x00000003, 0xffffffff, 0x00000002, 0xffff0000, 0x00000003,
      0xffff0000, 0x00000002, 0xfff00000, 0x00000003, 0xfff00000, 0x00000002,
      0xa9cb1d24, 0x48892a0d, 0x80000000, 0x00000003, 0x80000000, 0x00007fff,
      0x48892a0a, 0xa9cb9d24, 0x00100000, 0x00008000, 0x00100000, 0x00007fff,
      0x00010000, 0x00008000, 0x00010000, 0x00007fff, 0x00000001, 0x00008000,
      0x00000001, 0x00007fff, 0x00000000, 0x01008000, 0x00000000, 0x01007fff,
      0x00000000, 0x00018000, 0x00000000, 0x00017fff, 0x00000000, 0x00010000,
      0x00000000, 0x0000ffff, 0x00000000, 0x00008001, 0x00000000, 0x00008000,
      0x00000000, 0x00007fff, 0x00000000, 0x00007ffe, 0x00000000, 0x00007ffd,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xffff8000,
      0xffffffff, 0xffff7fff, 0xffffffff, 0xff008000, 0xffffffff, 0xff007fff,
      0xffffffff, 0xa9cb9d24, 0xffffffff, 0x4889aa0a, 0xffffffff, 0x00008000,
      0xffffffff, 0x00007fff, 0xffff0000, 0x00008000, 0xffff0000, 0x00007fff,
      0xfff00000, 0x00008000, 0xfff00000, 0x00007fff, 0xa9cb1d24, 0x4889aa0a,
      0x80000000, 0x00008000, 0x80000000, 0x00008000, 0x48892a0a, 0xa9cb9d25,
      0x00100000, 0x00008001, 0x00100000, 0x00008000, 0x00010000, 0x00008001,
      0x00010000, 0x00008000, 0x00000001, 0x00008001, 0x00000001, 0x00008000,
      0x00000000, 0x01008001, 0x00000000, 0x01008000, 0x00000000, 0x00018001,
      0x00000000, 0x00018000, 0x00000000, 0x00010001, 0x00000000, 0x00010000,
      0x00000000, 0x00008002, 0x00000000, 0x00008001, 0x00000000, 0x00008000,
      0x00000000, 0x00007fff, 0x00000000, 0x00007ffe, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xffff8001, 0xffffffff, 0xffff8000,
      0xffffffff, 0xff008001, 0xffffffff, 0xff008000, 0xffffffff, 0xa9cb9d25,
      0xffffffff, 0x4889aa0b, 0xffffffff, 0x00008001, 0xffffffff, 0x00008000,
      0xffff0000, 0x00008001, 0xffff0000, 0x00008000, 0xfff00000, 0x00008001,
      0xfff00000, 0x00008000, 0xa9cb1d24, 0x4889aa0b, 0x80000000, 0x00008001,
      0x80000000, 0x0000ffff, 0x48892a0a, 0xa9cc1d24, 0x00100000, 0x00010000,
      0x00100000, 0x0000ffff, 0x00010000, 0x00010000, 0x00010000, 0x0000ffff,
      0x00000001, 0x00010000, 0x00000001, 0x0000ffff, 0x00000000, 0x01010000,
      0x00000000, 0x0100ffff, 0x00000000, 0x00020000, 0x00000000, 0x0001ffff,
      0x00000000, 0x00018000, 0x00000000, 0x00017fff, 0x00000000, 0x00010001,
      0x00000000, 0x00010000, 0x00000000, 0x0000ffff, 0x00000000, 0x0000fffe,
      0x00000000, 0x0000fffd, 0x00000000, 0x00008000, 0x00000000, 0x00007fff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xff010000,
      0xffffffff, 0xff00ffff, 0xffffffff, 0xa9cc1d24, 0xffffffff, 0x488a2a0a,
      0xffffffff, 0x00010000, 0xffffffff, 0x0000ffff, 0xffff0000, 0x00010000,
      0xffff0000, 0x0000ffff, 0xfff00000, 0x00010000, 0xfff00000, 0x0000ffff,
      0xa9cb1d24, 0x488a2a0a, 0x80000000, 0x00010000, 0x80000000, 0x00010000,
      0x48892a0a, 0xa9cc1d25, 0x00100000, 0x00010001, 0x00100000, 0x00010000,
      0x00010000, 0x00010001, 0x00010000, 0x00010000, 0x00000001, 0x00010001,
      0x00000001, 0x00010000, 0x00000000, 0x01010001, 0x00000000, 0x01010000,
      0x00000000, 0x00020001, 0x00000000, 0x00020000, 0x00000000, 0x00018001,
      0x00000000, 0x00018000, 0x00000000, 0x00010002, 0x00000000, 0x00010001,
      0x00000000, 0x00010000, 0x00000000, 0x0000ffff, 0x00000000, 0x0000fffe,
      0x00000000, 0x00008001, 0x00000000, 0x00008000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xff010001, 0xffffffff, 0xff010000,
      0xffffffff, 0xa9cc1d25, 0xffffffff, 0x488a2a0b, 0xffffffff, 0x00010001,
      0xffffffff, 0x00010000, 0xffff0000, 0x00010001, 0xffff0000, 0x00010000,
      0xfff00000, 0x00010001, 0xfff00000, 0x00010000, 0xa9cb1d24, 0x488a2a0b,
      0x80000000, 0x00010001, 0x80000000, 0x00ffffff, 0x48892a0a, 0xaacb1d24,
      0x00100000, 0x01000000, 0x00100000, 0x00ffffff, 0x00010000, 0x01000000,
      0x00010000, 0x00ffffff, 0x00000001, 0x01000000, 0x00000001, 0x00ffffff,
      0x00000000, 0x02000000, 0x00000000, 0x01ffffff, 0x00000000, 0x01010000,
      0x00000000, 0x0100ffff, 0x00000000, 0x01008000, 0x00000000, 0x01007fff,
      0x00000000, 0x01000001, 0x00000000, 0x01000000, 0x00000000, 0x00ffffff,
      0x00000000, 0x00fffffe, 0x00000000, 0x00fffffd, 0x00000000, 0x00ff8000,
      0x00000000, 0x00ff7fff, 0x00000000, 0x00ff0000, 0x00000000, 0x00feffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xaacb1d24,
      0xffffffff, 0x49892a0a, 0xffffffff, 0x01000000, 0xffffffff, 0x00ffffff,
      0xffff0000, 0x01000000, 0xffff0000, 0x00ffffff, 0xfff00000, 0x01000000,
      0xfff00000, 0x00ffffff, 0xa9cb1d24, 0x49892a0a, 0x80000000, 0x01000000,
      0x80000000, 0x01000000, 0x48892a0a, 0xaacb1d25, 0x00100000, 0x01000001,
      0x00100000, 0x01000000, 0x00010000, 0x01000001, 0x00010000, 0x01000000,
      0x00000001, 0x01000001, 0x00000001, 0x01000000, 0x00000000, 0x02000001,
      0x00000000, 0x02000000, 0x00000000, 0x01010001, 0x00000000, 0x01010000,
      0x00000000, 0x01008001, 0x00000000, 0x01008000, 0x00000000, 0x01000002,
      0x00000000, 0x01000001, 0x00000000, 0x01000000, 0x00000000, 0x00ffffff,
      0x00000000, 0x00fffffe, 0x00000000, 0x00ff8001, 0x00000000, 0x00ff8000,
      0x00000000, 0x00ff0001, 0x00000000, 0x00ff0000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffffffff, 0xaacb1d25, 0xffffffff, 0x49892a0b,
      0xffffffff, 0x01000001, 0xffffffff, 0x01000000, 0xffff0000, 0x01000001,
      0xffff0000, 0x01000000, 0xfff00000, 0x01000001, 0xfff00000, 0x01000000,
      0xa9cb1d24, 0x49892a0b, 0x80000000, 0x01000001, 0x80000000, 0x5634e2db,
      0x48892a0b, 0x00000000, 0x00100000, 0x5634e2dc, 0x00100000, 0x5634e2db,
      0x00010000, 0x5634e2dc, 0x00010000, 0x5634e2db, 0x00000001, 0x5634e2dc,
      0x00000001, 0x5634e2db, 0x00000000, 0x5734e2dc, 0x00000000, 0x5734e2db,
      0x00000000, 0x5635e2dc, 0x00000000, 0x5635e2db, 0x00000000, 0x563562dc,
      0x00000000, 0x563562db, 0x00000000, 0x5634e2dd, 0x00000000, 0x5634e2dc,
      0x00000000, 0x5634e2db, 0x00000000, 0x5634e2da, 0x00000000, 0x5634e2d9,
      0x00000000, 0x563462dc, 0x00000000, 0x563462db, 0x00000000, 0x5633e2dc,
      0x00000000, 0x5633e2db, 0x00000000, 0x5534e2dc, 0x00000000, 0x5534e2db,
      0x00000000, 0x00000000, 0xffffffff, 0x9ebe0ce6, 0xffffffff, 0x5634e2dc,
      0xffffffff, 0x5634e2db, 0xffff0000, 0x5634e2dc, 0xffff0000, 0x5634e2db,
      0xfff00000, 0x5634e2dc, 0xfff00000, 0x5634e2db, 0xa9cb1d24, 0x9ebe0ce6,
      0x80000000, 0x5634e2dc, 0x80000000, 0xb776d5f5, 0x48892a0b, 0x6141f31a,
      0x00100000, 0xb776d5f6, 0x00100000, 0xb776d5f5, 0x00010000, 0xb776d5f6,
      0x00010000, 0xb776d5f5, 0x00000001, 0xb776d5f6, 0x00000001, 0xb776d5f5,
      0x00000000, 0xb876d5f6, 0x00000000, 0xb876d5f5, 0x00000000, 0xb777d5f6,
      0x00000000, 0xb777d5f5, 0x00000000, 0xb77755f6, 0x00000000, 0xb77755f5,
      0x00000000, 0xb776d5f7, 0x00000000, 0xb776d5f6, 0x00000000, 0xb776d5f5,
      0x00000000, 0xb776d5f4, 0x00000000, 0xb776d5f3, 0x00000000, 0xb77655f6,
      0x00000000, 0xb77655f5, 0x00000000, 0xb775d5f6, 0x00000000, 0xb775d5f5,
      0x00000000, 0xb676d5f6, 0x00000000, 0xb676d5f5, 0x00000000, 0x6141f31a,
      0x00000000, 0x00000000, 0xffffffff, 0xb776d5f6, 0xffffffff, 0xb776d5f5,
      0xffff0000, 0xb776d5f6, 0xffff0000, 0xb776d5f5, 0xfff00000, 0xb776d5f6,
      0xfff00000, 0xb776d5f5, 0xa9cb1d25, 0x00000000, 0x80000000, 0xb776d5f6,
      0x80000000, 0xffffffff, 0x48892a0b, 0xa9cb1d24, 0x00100001, 0x00000000,
      0x00100000, 0xffffffff, 0x00010001, 0x00000000, 0x00010000, 0xffffffff,
      0x00000002, 0x00000000, 0x00000001, 0xffffffff, 0x00000001, 0x01000000,
      0x00000001, 0x00ffffff, 0x00000001, 0x00010000, 0x00000001, 0x0000ffff,
      0x00000001, 0x00008000, 0x00000001, 0x00007fff, 0x00000001, 0x00000001,
      0x00000001, 0x00000000, 0x00000000, 0xffffffff, 0x00000000, 0xfffffffe,
      0x00000000, 0xfffffffd, 0x00000000, 0xffff8000, 0x00000000, 0xffff7fff,
      0x00000000, 0xffff0000, 0x00000000, 0xfffeffff, 0x00000000, 0xff000000,
      0x00000000, 0xfeffffff, 0x00000000, 0xa9cb1d24, 0x00000000, 0x48892a0a,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xffff0001, 0x00000000,
      0xffff0000, 0xffffffff, 0xfff00001, 0x00000000, 0xfff00000, 0xffffffff,
      0xa9cb1d25, 0x48892a0a, 0x80000001, 0x00000000, 0x80000001, 0x00000000,
      0x48892a0b, 0xa9cb1d25, 0x00100001, 0x00000001, 0x00100001, 0x00000000,
      0x00010001, 0x00000001, 0x00010001, 0x00000000, 0x00000002, 0x00000001,
      0x00000002, 0x00000000, 0x00000001, 0x01000001, 0x00000001, 0x01000000,
      0x00000001, 0x00010001, 0x00000001, 0x00010000, 0x00000001, 0x00008001,
      0x00000001, 0x00008000, 0x00000001, 0x00000002, 0x00000001, 0x00000001,
      0x00000001, 0x00000000, 0x00000000, 0xffffffff, 0x00000000, 0xfffffffe,
      0x00000000, 0xffff8001, 0x00000000, 0xffff8000, 0x00000000, 0xffff0001,
      0x00000000, 0xffff0000, 0x00000000, 0xff000001, 0x00000000, 0xff000000,
      0x00000000, 0xa9cb1d25, 0x00000000, 0x48892a0b, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xffff0001, 0x00000001, 0xffff0001, 0x00000000,
      0xfff00001, 0x00000001, 0xfff00001, 0x00000000, 0xa9cb1d25, 0x48892a0b,
      0x80000001, 0x00000001, 0x8000ffff, 0xffffffff, 0x488a2a0a, 0xa9cb1d24,
      0x00110000, 0x00000000, 0x0010ffff, 0xffffffff, 0x00020000, 0x00000000,
      0x0001ffff, 0xffffffff, 0x00010001, 0x00000000, 0x00010000, 0xffffffff,
      0x00010000, 0x01000000, 0x00010000, 0x00ffffff, 0x00010000, 0x00010000,
      0x00010000, 0x0000ffff, 0x00010000, 0x00008000, 0x00010000, 0x00007fff,
      0x00010000, 0x00000001, 0x00010000, 0x00000000, 0x0000ffff, 0xffffffff,
      0x0000ffff, 0xfffffffe, 0x0000ffff, 0xfffffffd, 0x0000ffff, 0xffff8000,
      0x0000ffff, 0xffff7fff, 0x0000ffff, 0xffff0000, 0x0000ffff, 0xfffeffff,
      0x0000ffff, 0xff000000, 0x0000ffff, 0xfeffffff, 0x0000ffff, 0xa9cb1d24,
      0x0000ffff, 0x48892a0a, 0x0000ffff, 0x00000000, 0x0000fffe, 0xffffffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xfff10000, 0x00000000,
      0xfff0ffff, 0xffffffff, 0xa9cc1d24, 0x48892a0a, 0x80010000, 0x00000000,
      0x80010000, 0x00000000, 0x488a2a0a, 0xa9cb1d25, 0x00110000, 0x00000001,
      0x00110000, 0x00000000, 0x00020000, 0x00000001, 0x00020000, 0x00000000,
      0x00010001, 0x00000001, 0x00010001, 0x00000000, 0x00010000, 0x01000001,
      0x00010000, 0x01000000, 0x00010000, 0x00010001, 0x00010000, 0x00010000,
      0x00010000, 0x00008001, 0x00010000, 0x00008000, 0x00010000, 0x00000002,
      0x00010000, 0x00000001, 0x00010000, 0x00000000, 0x0000ffff, 0xffffffff,
      0x0000ffff, 0xfffffffe, 0x0000ffff, 0xffff8001, 0x0000ffff, 0xffff8000,
      0x0000ffff, 0xffff0001, 0x0000ffff, 0xffff0000, 0x0000ffff, 0xff000001,
      0x0000ffff, 0xff000000, 0x0000ffff, 0xa9cb1d25, 0x0000ffff, 0x48892a0b,
      0x0000ffff, 0x00000001, 0x0000ffff, 0x00000000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xfff10000, 0x00000001, 0xfff10000, 0x00000000,
      0xa9cc1d24, 0x48892a0b, 0x80010000, 0x00000001, 0x800fffff, 0xffffffff,
      0x48992a0a, 0xa9cb1d24, 0x00200000, 0x00000000, 0x001fffff, 0xffffffff,
      0x00110000, 0x00000000, 0x0010ffff, 0xffffffff, 0x00100001, 0x00000000,
      0x00100000, 0xffffffff, 0x00100000, 0x01000000, 0x00100000, 0x00ffffff,
      0x00100000, 0x00010000, 0x00100000, 0x0000ffff, 0x00100000, 0x00008000,
      0x00100000, 0x00007fff, 0x00100000, 0x00000001, 0x00100000, 0x00000000,
      0x000fffff, 0xffffffff, 0x000fffff, 0xfffffffe, 0x000fffff, 0xfffffffd,
      0x000fffff, 0xffff8000, 0x000fffff, 0xffff7fff, 0x000fffff, 0xffff0000,
      0x000fffff, 0xfffeffff, 0x000fffff, 0xff000000, 0x000fffff, 0xfeffffff,
      0x000fffff, 0xa9cb1d24, 0x000fffff, 0x48892a0a, 0x000fffff, 0x00000000,
      0x000ffffe, 0xffffffff, 0x000f0000, 0x00000000, 0x000effff, 0xffffffff,
      0x00000000, 0x00000000, 0xffffffff, 0xffffffff, 0xa9db1d24, 0x48892a0a,
      0x80100000, 0x00000000, 0x80100000, 0x00000000, 0x48992a0a, 0xa9cb1d25,
      0x00200000, 0x00000001, 0x00200000, 0x00000000, 0x00110000, 0x00000001,
      0x00110000, 0x00000000, 0x00100001, 0x00000001, 0x00100001, 0x00000000,
      0x00100000, 0x01000001, 0x00100000, 0x01000000, 0x00100000, 0x00010001,
      0x00100000, 0x00010000, 0x00100000, 0x00008001, 0x00100000, 0x00008000,
      0x00100000, 0x00000002, 0x00100000, 0x00000001, 0x00100000, 0x00000000,
      0x000fffff, 0xffffffff, 0x000fffff, 0xfffffffe, 0x000fffff, 0xffff8001,
      0x000fffff, 0xffff8000, 0x000fffff, 0xffff0001, 0x000fffff, 0xffff0000,
      0x000fffff, 0xff000001, 0x000fffff, 0xff000000, 0x000fffff, 0xa9cb1d25,
      0x000fffff, 0x48892a0b, 0x000fffff, 0x00000001, 0x000fffff, 0x00000000,
      0x000f0000, 0x00000001, 0x000f0000, 0x00000000, 0x00000000, 0x00000001,
      0x00000000, 0x00000000, 0xa9db1d24, 0x48892a0b, 0x80100000, 0x00000001,
      0xd634e2db, 0xb776d5f5, 0x9ebe0ce6, 0x6141f31a, 0x5644e2db, 0xb776d5f6,
      0x5644e2db, 0xb776d5f5, 0x5635e2db, 0xb776d5f6, 0x5635e2db, 0xb776d5f5,
      0x5634e2dc, 0xb776d5f6, 0x5634e2dc, 0xb776d5f5, 0x5634e2db, 0xb876d5f6,
      0x5634e2db, 0xb876d5f5, 0x5634e2db, 0xb777d5f6, 0x5634e2db, 0xb777d5f5,
      0x5634e2db, 0xb77755f6, 0x5634e2db, 0xb77755f5, 0x5634e2db, 0xb776d5f7,
      0x5634e2db, 0xb776d5f6, 0x5634e2db, 0xb776d5f5, 0x5634e2db, 0xb776d5f4,
      0x5634e2db, 0xb776d5f3, 0x5634e2db, 0xb77655f6, 0x5634e2db, 0xb77655f5,
      0x5634e2db, 0xb775d5f6, 0x5634e2db, 0xb775d5f5, 0x5634e2db, 0xb676d5f6,
      0x5634e2db, 0xb676d5f5, 0x5634e2db, 0x6141f31a, 0x5634e2db, 0x00000000,
      0x5634e2da, 0xb776d5f6, 0x5634e2da, 0xb776d5f5, 0x5633e2db, 0xb776d5f6,
      0x5633e2db, 0xb776d5f5, 0x5624e2db, 0xb776d5f6, 0x5624e2db, 0xb776d5f5,
      0x00000000, 0x00000000, 0xd634e2db, 0xb776d5f6, 0xffffffff, 0xffffffff,
      0xc8892a0a, 0xa9cb1d24, 0x80100000, 0x00000000, 0x800fffff, 0xffffffff,
      0x80010000, 0x00000000, 0x8000ffff, 0xffffffff, 0x80000001, 0x00000000,
      0x80000000, 0xffffffff, 0x80000000, 0x01000000, 0x80000000, 0x00ffffff,
      0x80000000, 0x00010000, 0x80000000, 0x0000ffff, 0x80000000, 0x00008000,
      0x80000000, 0x00007fff, 0x80000000, 0x00000001, 0x80000000, 0x00000000,
      0x7fffffff, 0xffffffff, 0x7fffffff, 0xfffffffe, 0x7fffffff, 0xfffffffd,
      0x7fffffff, 0xffff8000, 0x7fffffff, 0xffff7fff, 0x7fffffff, 0xffff0000,
      0x7fffffff, 0xfffeffff, 0x7fffffff, 0xff000000, 0x7fffffff, 0xfeffffff,
      0x7fffffff, 0xa9cb1d24, 0x7fffffff, 0x48892a0a, 0x7fffffff, 0x00000000,
      0x7ffffffe, 0xffffffff, 0x7fff0000, 0x00000000, 0x7ffeffff, 0xffffffff,
      0x7ff00000, 0x00000000, 0x7fefffff, 0xffffffff, 0x29cb1d24, 0x48892a0a,
      0x00000000, 0x00000000
    ];
                  
export default TEST_SUB_BITS;