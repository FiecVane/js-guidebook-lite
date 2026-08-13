---
title: FileReaderSync API
outline: [2, 3]
---

# FileReaderSync API

FileReaderSync 接口允许以 **同步** 的方式读取 [File](./file) 或 [Blob](./blob) 对象中的内容。

> 该接口只在 Workers 里可用，因为在主线程里进行同步 I/O 操作可能会阻塞用户界面。
