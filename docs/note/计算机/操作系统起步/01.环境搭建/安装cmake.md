# 安装cmake

使用 homebrew 安装 cmake ，先到 [homebrew](https://formulae.brew.sh/formula/cmake#default) 官网查看 cmake 安装命令：

```
brew install cmake
```

验证：
```
cmake
```

输出如下内容表示安装成功：
```
Usage

  cmake [options] <path-to-source>
  cmake [options] <path-to-existing-build>
  cmake [options] -S <path-to-source> -B <path-to-build>

Specify a source directory to (re-)generate a build system for it in the
current working directory.  Specify an existing build directory to
re-generate its build system.

Run 'cmake --help' for more information.
```