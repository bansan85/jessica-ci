# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.20

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Produce verbose output by default.
VERBOSE = 1

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/bin/cmake

# The command to remove a file.
RM = /usr/local/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/runner/work/jessica/jessica

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/runner/work/jessica/jessica/build

# Include any dependencies generated for this target.
include src/javascript/wasm/CMakeFiles/jessica_js.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include src/javascript/wasm/CMakeFiles/jessica_js.dir/compiler_depend.make

# Include the progress variables for this target.
include src/javascript/wasm/CMakeFiles/jessica_js.dir/progress.make

# Include the compile flags for this target's objects.
include src/javascript/wasm/CMakeFiles/jessica_js.dir/flags.make

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/flags.make
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/includes_CXX.rsp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o: ../src/javascript/wasm/bindings/calc/geotechnical.cpp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/runner/work/jessica/jessica/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o -MF CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o.d -o CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o -c /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/calc/geotechnical.cpp

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.i"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/calc/geotechnical.cpp > CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.i

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.s"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/calc/geotechnical.cpp -o CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.s

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/flags.make
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/includes_CXX.rsp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o: ../src/javascript/wasm/bindings/data/geotechnical.cpp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/runner/work/jessica/jessica/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o -MF CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o.d -o CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o -c /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/geotechnical.cpp

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.i"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/geotechnical.cpp > CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.i

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.s"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/geotechnical.cpp -o CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.s

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/flags.make
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/includes_CXX.rsp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o: ../src/javascript/wasm/bindings/data/load.cpp
src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o: src/javascript/wasm/CMakeFiles/jessica_js.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/runner/work/jessica/jessica/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o -MF CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o.d -o CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o -c /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/load.cpp

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/jessica_js.dir/bindings/data/load.cpp.i"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/load.cpp > CMakeFiles/jessica_js.dir/bindings/data/load.cpp.i

src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/jessica_js.dir/bindings/data/load.cpp.s"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && /home/runner/work/jessica/jessica/emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/runner/work/jessica/jessica/src/javascript/wasm/bindings/data/load.cpp -o CMakeFiles/jessica_js.dir/bindings/data/load.cpp.s

# Object files for target jessica_js
jessica_js_OBJECTS = \
"CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o" \
"CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o" \
"CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o"

# External object files for target jessica_js
jessica_js_EXTERNAL_OBJECTS =

src/javascript/wasm/libjessica_js.a: src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/calc/geotechnical.cpp.o
src/javascript/wasm/libjessica_js.a: src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/geotechnical.cpp.o
src/javascript/wasm/libjessica_js.a: src/javascript/wasm/CMakeFiles/jessica_js.dir/bindings/data/load.cpp.o
src/javascript/wasm/libjessica_js.a: src/javascript/wasm/CMakeFiles/jessica_js.dir/build.make
src/javascript/wasm/libjessica_js.a: src/javascript/wasm/CMakeFiles/jessica_js.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/runner/work/jessica/jessica/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Linking CXX static library libjessica_js.a"
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && $(CMAKE_COMMAND) -P CMakeFiles/jessica_js.dir/cmake_clean_target.cmake
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/jessica_js.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/javascript/wasm/CMakeFiles/jessica_js.dir/build: src/javascript/wasm/libjessica_js.a
.PHONY : src/javascript/wasm/CMakeFiles/jessica_js.dir/build

src/javascript/wasm/CMakeFiles/jessica_js.dir/clean:
	cd /home/runner/work/jessica/jessica/build/src/javascript/wasm && $(CMAKE_COMMAND) -P CMakeFiles/jessica_js.dir/cmake_clean.cmake
.PHONY : src/javascript/wasm/CMakeFiles/jessica_js.dir/clean

src/javascript/wasm/CMakeFiles/jessica_js.dir/depend:
	cd /home/runner/work/jessica/jessica/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/runner/work/jessica/jessica /home/runner/work/jessica/jessica/src/javascript/wasm /home/runner/work/jessica/jessica/build /home/runner/work/jessica/jessica/build/src/javascript/wasm /home/runner/work/jessica/jessica/build/src/javascript/wasm/CMakeFiles/jessica_js.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/javascript/wasm/CMakeFiles/jessica_js.dir/depend

