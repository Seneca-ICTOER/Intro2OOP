"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[125],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const i={id:"welcome-to-oo",title:"Welcome to Object-Oriented",sidebar_position:1,description:"TBD"},r="Welcome to Object-Oriented",l={unversionedId:"A-Introduction/welcome-to-oo",id:"A-Introduction/welcome-to-oo",title:"Welcome to Object-Oriented",description:"TBD",source:"@site/docs/A-Introduction/welcome-to-oo.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/welcome-to-oo",permalink:"/A-Introduction/welcome-to-oo",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2OOP/tree/main/docs/A-Introduction/welcome-to-oo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"welcome-to-oo",title:"Welcome to Object-Oriented",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Table of contents",permalink:"/"},next:{title:"Object Terminology",permalink:"/A-Introduction/object-terminology"}},s={},p=[{value:"Addressing Complexity",id:"addressing-complexity",level:2},{value:"Programming Languages",id:"programming-languages",level:2},{value:"Features of C++",id:"features-of-c",level:2},{value:"Type Safety",id:"type-safety",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Common Usage",id:"common-usage",level:2},{value:"FIRST EXAMPLES",id:"first-examples",level:2},{value:"From C to C++ Syntax",id:"from-c-to-c-syntax",level:3},{value:"C - procedural code",id:"c---procedural-code",level:3},{value:"C++ - procedural code",id:"c---procedural-code-1",level:3},{value:"C++ - hybrid code",id:"c---hybrid-code",level:3},{value:"First Input and Output Example",id:"first-input-and-output-example",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-object-oriented"},"Welcome to Object-Oriented"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduce complexity and object-oriented programming"),(0,o.kt)("li",{parentName:"ul"},"Introduce namespaces for grouping an application's identifiers"),(0,o.kt)("li",{parentName:"ul"},"Write our first object-oriented program")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'The technique of mastering complexity has been known since ancient times: divide et impera (divide and rule)" (Dijkstra, 1979)'))),(0,o.kt)("p",null,"Modern software applications are intricate, dynamic and complex. The number of lines of code can exceed the hundreds of thousands or millions. These applications evolve over time. Some take years of programming effort to mature. Creating such applications involves many developers with different levels of expertise. Their work consists of smaller stand-alone and testable sub-projects; sub-projects that are transferrable, practical, upgradeable and possibly even usable within other future applications. The principles of software engineering suggest that each component should be highly cohesive and that the collection of components should be loosely coupled. Object-oriented languages provide the tools for implementing these principles."),(0,o.kt)("p",null,"C++ is an object-oriented programming language specifically designed to provide a simple, comprehensive feature set for programming modern applications without loss in performance. C++ combines the efficiencies of the C language with the object-oriented features necessary for the development of large applications."),(0,o.kt)("h2",{id:"addressing-complexity"},"Addressing Complexity"),(0,o.kt)("p",null,"Large applications are complex. We address their complexity by identifying the most important features of the problem domain; that is, the area of expertise that needs to be examined to solve the problem. We express the features in terms of data and activities. We identify the data objects and the activities on those objects as complementary tasks."),(0,o.kt)("p",null,"Consider a course enrollment system for a program in a college or university. Each participant"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enrolls in several face-to-face courses"),(0,o.kt)("li",{parentName:"ul"},"enrolls in several hybrid courses"),(0,o.kt)("li",{parentName:"ul"},"earns a grade in each course")),(0,o.kt)("p",null,"The following structure diagram identifies the activities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Course Participation",src:n(3396).Z,width:"549",height:"164"})),(0,o.kt)("p",null,"If we switch our attention to the objects involved, we find a Course and a Hybrid Course. Focusing on a Course, we observe that it has a Course Code. We lookup the Code in the institution's Calendar to determine when that Course is offered."),(0,o.kt)("p",null,"We say that a Course ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"has a"))," Code and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"uses a"))," Grading Scheme and that a Hybrid Course is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"a kind of"))," Course. The diagram below shows these relationships between the objects in this problem domain. The connectors identify the types of relationships. The closed circle connector identifies a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"has-a"))," relationship, the open circle connector identifies a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"uses-a"))," relationship and the arrow connector identifies an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"is-a-kind-of"))," relationship."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Relationship",src:n(1314).Z,width:"529",height:"161"})),(0,o.kt)("p",null,"In switching our attention from the activities in the structure chart to the objects in the relationship diagram we have switched from a procedural description of the problem to an object-oriented description."),(0,o.kt)("p",null,"These two complementary approaches to mastering complexity date at least as far back as the ancient Greeks. Heraclitus viewed the world in terms of process, while Democritus viewed the world in terms of discrete atoms."),(0,o.kt)("p",null,"Learning to divide a complex problem into objects and to identify the relationships amongst the objects is the subject matter of system analysis and design courses. The material covered in this course introduces some of the principal concepts of analysis and design along with the C++ syntax for implementing these concepts in code."),(0,o.kt)("h2",{id:"programming-languages"},"Programming Languages"),(0,o.kt)("a",{href:"http://www.levenez.com/lang/",target:"_blank"},"Eric Levenez")," maintains a web page that lists the major programming languages throughout the world. Many of these languages are object orientated.",(0,o.kt)("p",null,"Java, C, C++, Python and C# are currently in top ten most popular languages. Java, C, C++ and C# have much syntax in common: Java syntax is C-like, but not a superset of C, C++ contains almost all of C as a subset, and C# syntax is C++-like but not a superset of C. Each is an imperative language; that is, a language that specifies every step necessary to reach a desired state."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"C/C++",src:n(1727).Z,width:"643",height:"204"})),(0,o.kt)("p",null,"The distinguishing features of C, C++ and Java are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C has no object-oriented support. C leaves us no choice but to design our programming solutions in terms of activity-oriented structures."),(0,o.kt)("li",{parentName:"ul"},"C++ is ",(0,o.kt)("strong",{parentName:"li"},"hybrid"),". It augments C with object-oriented features. C++ lets us build our solutions partly from activities and partly from objects. The main function in any C++ program is a C function, which is not object-oriented. C++ stresses compile-time logic."),(0,o.kt)("li",{parentName:"ul"},"Java is ",(0,o.kt)("strong",{parentName:"li"},"purely object-oriented"),". It excludes all non-object-oriented features. Java leaves us no choice but to design our solutions using an object-oriented structures.")),(0,o.kt)("h2",{id:"features-of-c"},"Features of C++"),(0,o.kt)("p",null,"Using C++ to learn object-oriented programming has several advantages for a student familiar with C. C++ is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nearly a perfect superset of C"),(0,o.kt)("li",{parentName:"ul"},"a multi-paradigm language",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"procedural (can focus on distinct activities)"),(0,o.kt)("li",{parentName:"ul"},"object-oriented (can focus on distinct objects)"))),(0,o.kt)("li",{parentName:"ul"},"realistic, efficient, and flexible enough for demanding projects",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"large applications"),(0,o.kt)("li",{parentName:"ul"},"game programming"),(0,o.kt)("li",{parentName:"ul"},"operating systems"))),(0,o.kt)("li",{parentName:"ul"},"clean enough for presenting basic concepts"),(0,o.kt)("li",{parentName:"ul"},"comprehensive enough for presenting advanced programming concepts")),(0,o.kt)("h2",{id:"type-safety"},"Type Safety"),(0,o.kt)("p",null,"Type safety in central to C++."),(0,o.kt)("p",null,"A type-safe language traps syntax errors at compile-time, diminishing the amount of buggy code that escapes to the client. C++ compilers use type rules to check syntax and generate errors or warnings if any type rule has been violated."),(0,o.kt)("p",null,"C compilers are more tolerant of type errors than C++ compilers. For example, a C compiler will accept the following code, which may cause a segmentation fault at run-time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},' #include <stdio.h>\n void foo();\n\n int main(void)\n {\n     foo(-25);\n }\n void foo(char x[])\n {\n     printf("%s", x); /* ERROR */\n }\n')),(0,o.kt)("p",null,"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Segmentation Fault (coredump)\n")),(0,o.kt)("p",null,"The prototype for ",(0,o.kt)("inlineCode",{parentName:"p"},"foo()")," instructs the compiler to omit checking for argument/parameter type mismatches. The argument in the function call is an int of negative value ",(0,o.kt)("inlineCode",{parentName:"p"},"(-25)")," and the type received in the parameter is the address of a char array. Since the parameter's value is an invalid address, printing from that address causes a segmentation fault at run-time, but no error at compile-time."),(0,o.kt)("p",null,"We can fix this easily. If we include the parameter type in the prototype as shown below, the compiler will check for an argument/parameter type mismatch and issue an error message like that shown on the right:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},' #include <stdio.h>\n void foo(char x[]);\n\n int main(void)\n {\n     foo(-25);\n }\n void foo(char x[])\n {\n     printf("%s", x);\n }\n')),(0,o.kt)("p",null,"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Function argument assignment between types "char*" and "int" is not allowed.\n')),(0,o.kt)("p",null,"Bjarne Stroustrup, in creating the C++ language, decided to close this loophole. He mandated that in C++ all prototypes list their parameter types, which has forced all C++ compilers to check for argument/parameter type mismatches at compile-time."),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"In applications written simultaneously by several developers, chances are high that some developers will use the same identifier for different variables in the application. If so, once they assemble their code, naming conflicts will arise. We avoid such conflicts by developing each part of an application within its own namespace and scoping variables within each namespace."),(0,o.kt)("p",null,"A namespace is a scope for the entities that it encloses. Scoping rules avoid identifier conflicts across different namespaces."),(0,o.kt)("p",null,"We define a namespace as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"}," namespace identifier {\n\n }\n")),(0,o.kt)("p",null,"The identifier after the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace ")," keyword is the name of the scope. The pair of braces encloses and defines the scope."),(0,o.kt)("p",null,"For example, to define x in two separate ",(0,o.kt)("inlineCode",{parentName:"p"},"namespaces")," (english and french), we write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"namespace english {\n\n     int x = 2;\n     // ...\n\n }\n\n namespace french {\n\n     int x = 3;\n     // ...\n\n }\n")),(0,o.kt)("p",null,"To access a variable defined within a namespace, we precede its identifier with the namespace's identifier and separate them with a double colon (::). We call this double colon the scope resolution operator."),(0,o.kt)("p",null,"For example, to increment the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," in namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"english")," and to decrement the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," in namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"french"),", we write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"     english::x++;\n     french::x--;\n")),(0,o.kt)("p",null,"Each prefix uniquely identifies each variable's namespace."),(0,o.kt)("p",null,"Namespaces hide their entities. To expose an identifier to the current namespace, we insert the using declaration into our code before referring to the identifier."),(0,o.kt)("p",null,"For example, to expose one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"'s to the current namespace, we write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"    using french::x;\n")),(0,o.kt)("p",null,"After which, we can simply write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"    x++; // increments french::x but not english::x\n")),(0,o.kt)("p",null,"To expose all of a namespace's identifiers, we insert the ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directive into our code before referring to any of them."),(0,o.kt)("p",null,"For example, to expose all of the identifiers within namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"english"),", we write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"    using namespace english;\n")),(0,o.kt)("p",null,"Afterwards, we can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"     x++; // increments english::x but not french::x\n")),(0,o.kt)("p",null,"Exposing a single identifier or a complete namespace simply adds the identifier(s) to the hosting namespace."),(0,o.kt)("h2",{id:"common-usage"},"Common Usage"),(0,o.kt)("p",null,"By far the most common use of namespaces is for classifying"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"struct-like types"),(0,o.kt)("li",{parentName:"ul"},"function types")),(0,o.kt)("h2",{id:"first-examples"},"FIRST EXAMPLES"),(0,o.kt)("h3",{id:"from-c-to-c-syntax"},"From C to C++ Syntax"),(0,o.kt)("p",null,"To compare C++ syntax with C syntax, consider a program that displays the following phrase on the standard output device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Welcome to Object-Oriented\n")),(0,o.kt)("h3",{id:"c---procedural-code"},"C - procedural code"),(0,o.kt)("p",null,"The C source code for displaying this phrase is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C"},' // A Language for Complex Applications\n //  welcome.c\n //\n // To compile on linux: gcc welcome.c\n // To run compiled code: a.out\n //\n // To compile on windows: cl welcome.c\n // To run compiled code: welcome\n //\n\n #include <stdio.h>\n\n int main(void)\n {\n     printf("Welcome to Object-Oriented\\n");\n }\n')),(0,o.kt)("p",null,"The two functions - main() and printf() - specify activities. These identifiers share the global namespace."),(0,o.kt)("h3",{id:"c---procedural-code-1"},"C++ - procedural code"),(0,o.kt)("p",null,"The procedural C++ source code for displaying the phrase is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},' // A Language for Complex Applications\n // welcome.cpp\n //\n // To compile on linux:   g++ welcome.cpp\n //  To run compiled code: a.out\n //\n // To compile on windows:   cl welcome.cpp\n //  To run compiled code: welcome\n //\n\n #include <cstdio>\n using namespace std;\n\n int main ( ) {\n     printf("Welcome to Object-Oriented\\n");\n }\n')),(0,o.kt)("p",null,"The file extension for any C++ source code is .cpp. ",(0,o.kt)("inlineCode",{parentName:"p"},"<cstdio>")," is the C++ version of the C header file ",(0,o.kt)("inlineCode",{parentName:"p"},"<stdio.h>"),". This header file declares the prototype for printf() within the std namespace. std denotes standard."),(0,o.kt)("p",null,"The directive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"using namespace std;\n")),(0,o.kt)("p",null,"exposes all of the identifiers declared within the std namespace to the global namespace. The libraries of standard C++ declare most of their identifiers within the std namespace."),(0,o.kt)("h3",{id:"c---hybrid-code"},"C++ - hybrid code"),(0,o.kt)("p",null,"The object-oriented C++ source code for displaying our welcome phrase is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},' // A Language for Complex Applications\n // welcome.cpp\n //\n // To compile on linux:  g++ welcome.cpp\n // To run compiled code: a.out\n //\n // To compile on windows:   cl welcome.cpp\n //  To run compiled code: welcome\n //\n\n #include <iostream>\n using namespace std;\n\n int main ( ) {\n     cout << "Welcome to Object-Oriented" << endl;\n }\n')),(0,o.kt)("p",null,"The object-oriented syntax consists of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The directive"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"#include <iostream>\n")),(0,o.kt)("p",{parentName:"li"},"inserts the ",(0,o.kt)("inlineCode",{parentName:"p"},"<iostream>")," header file into the source code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<iostream>")," library provides access to the standard input and output objects.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The object"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-c++"}," cout\n")),(0,o.kt)("p",{parentName:"li"},"represents the standard output device.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The operator"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"}," <<\n")),(0,o.kt)("p",null,"inserts whatever is on its right side into whatever is on its left side."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"The manipulator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"}," endl\n")),(0,o.kt)("p",null,"represents an end of line character along with a flushing of the output buffer.\nNote the absence of a formatting string. The cout object handles the output formatting itself."),(0,o.kt)("p",null,"That is, the complete statement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},' cout << "Welcome to Object-Oriented" << endl;\n')),(0,o.kt)("p",null,"inserts into the standard output stream the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"Welcome to Object-Oriented"')," followed by a newline character and a flushing of the output buffer."),(0,o.kt)("h2",{id:"first-input-and-output-example"},"First Input and Output Example"),(0,o.kt)("p",null,"The following object-oriented program accepts an integer value from standard input and displays that value on standard output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},' // Input Output Objects\n // inputOutput.cpp\n //\n // To compile on linux: g++ inputOutput.cpp\n // To run compiled code: a.out\n //\n // To compile on windows:   cl welcome.cpp\n // To run compiled code: welcome\n //\n\n #include <iostream>\n using namespace std;\n\n int main() {\n     int i;\n\n     cout << "Enter an integer : ";\n     cin >> i;\n     cout << "You entered " << i << endl;\n }\n')),(0,o.kt)("p",null,"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"}," Enter an integer : 65\n You entered 65\n")),(0,o.kt)("p",null,"The object-oriented input statement includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The object")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"}," cin\n")),(0,o.kt)("p",null,"represents the standard input device."),(0,o.kt)("p",null,"The extraction operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"}," >>\n")),(0,o.kt)("p",null,"extracts the data identified on its right side from the object on its left-hand side.\nNote the absence of a formatting string. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cin")," object handles the input formatting itself."),(0,o.kt)("p",null,"That is, the complete statement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"}," cin >> i;\n")),(0,o.kt)("p",null,"extracts an integer value from the input stream and stores that value in the variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"."),(0,o.kt)("p",null,"The type of the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," defines the rule for converting the text characters in the input stream into byte data in memory. Note the absence of the address of operator on ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," and the absence of the conversion specifier, each of which is present in the C language."),(0,o.kt)("p",null,"SUMMARY"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"object-oriented languages are designed for solving large, complex problems"),(0,o.kt)("li",{parentName:"ul"},"object-oriented programming focuses on the objects in a problem domain"),(0,o.kt)("li",{parentName:"ul"},"C++ is a hybrid language that can focus on activities as well as objects"),(0,o.kt)("li",{parentName:"ul"},"C++ provides improved type safety relative to C"),(0,o.kt)("li",{parentName:"ul"},"cout is the library object that represents the standard output device"),(0,o.kt)("li",{parentName:"ul"},"cin is the library object that represents the standard input device"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<<")," is the operator that inserts data into the object on its left-side operand"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},">>")," is the operator that extracts data from the object on its left-side operand")),(0,o.kt)("p",null,"EXERCISES"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read Wikipedia on the C++ Programming Language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read this interview with Bjarne Stroustrup"),(0,o.kt)("p",{parentName:"li"},'"Be adventurous in your experimentation and somewhat more cautious in your production code. On my home pages, I have a "Technical and Style FAQ" that gives many practical hints and examples. However, to really develop significant new skills, one must read articles and books. I think of C++ as a multi-paradigm programming language. That is, C++ is a language that supports several effective programming techniques, where the best solution to a real-world programming problem often involves a combination of these techniques. Thus, I encourage people to learn data abstraction (roughly, programming using abstract classes), object-oriented programming (roughly, programming using class hierarchies) and generic programming (roughly, programming using templates). Furthermore, I encourage people to look for combinations of these techniques rather than becoming fanatical about one of these paradigms because it happens to be a great solution to a few problems.'),(0,o.kt)("p",{parentName:"li"},'It is important to remember that a programming language is only a tool. Once you master the basic concepts of a language, such as C++, it is far more important to gain a good understanding of an application area and of the problem you are trying to solve than it is to study the minute technical details of C++. Good luck, and have fun with C++! "'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Extract from the Linux Journal: Interview with Bjarne Stroustrup\nPosted on Thursday, August 28, 2003 by Aleksey Dolya"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install Visual Studio on your local computer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure that your remote Linux account is operational"))))}u.isMDXComponent=!0},3396:function(e,t,n){t.Z=n.p+"assets/images/01-CourseParticipation-d6ae943dcb8fbef64dc1a9a81b27315c.png"},1314:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAAChCAIAAAD2qXoZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAYtklEQVR4nO3df2yT950H8I8RZWWHujCqEJicC1HCedSxgHlrsJPLsagtTtot8Z1SUoEoWeWnTJfaXMZSckQcAmXy7jJsBS3YiyAROQLWnRNpl3jAsoMm8ZhqLcxxaa7xTIrX5odaDabo4Nqqvj8e/3ge/8qTYMd2/H6JP/zj+fGFfHk++f76fEU+n48AAAAEWJPqAgAAQMZAzAAAAKEQMwAAQCjEDAAAEAoxAwAAhELMAAAAoRAzAABAKMQMAAAQCjEDAAAE88VWq/77VJcuK9TUquP8FDJXTa061f+0WWG11h8uPItWhpCfhcgXO3eISCQyOZBZJOkYebyfQuZC/VkZq7X+cKEurQzNtxY/Bn1TAAAgFGIGAAAIhZgBAABCIWYAAIBQiBkAkOVsvXIRw/3TZkv8TbxGfejK7uEGEdNgnE/8bZIOMQMAsperTcTIq0bCPrVWMXLlsDclJUp3a1NdAACA1HC1iTqsRETlRt8BZdjndksts9lhkiblzkWVF3yVSbly0qGdAQBZyWsctBKRptHBCxhEJG3xnW5SEJnvjKWmaOkMMQMAstH8qMVDVG6M3pLIrT9RTpqd/ljiHm4QMW22+T4lIxeFuq3GGO4oiL7Pzb8GZ5gkfICEO54ReM0OeCx6KblyeMyoj3LMCkHfFABkIffEDTvJDC8qYx2gOuBQ8c84c9FqJyKS1ZWIab5P2dpu537vaS/W01RzfRERkdeor9V5gt9Zqxi3ojBOcZy61lphlyK7RWsnonhXSybEDBDqiy++GB0dnZiY8Hg8CwsLGzZs2Lx5c2lpqUKhWLduXapLBzxffvnlH/7wh2vXrs3NzfX394vFYrlcLpVKKyoqioqKUl26dDA14yRSb88VfobTTk1TJvY5TrbedjuRpjE04GHrlVeN3Bicr9fmknv4pM5DVNgU67kfjXrI1KIi8kcjz70poiJa3qWSCTEDFvfJJ590dXUdP3481gE6ne7HP/7xli1bVrJUENWjR48uX77c1NT08OHD4Icffvjh6Ogo+7qkpMRsNj///PMikShFZUxbtt6wOVQyw+kL2kBc0VTXB8Ot6oDDd8D/2j3cUGxxcs7yDjqcROqh5uDxYm2z8S6jNce+taaxxd+sya0/Ud5eNeL+YJ5Uucu5VHIhZkA8Pp9Pr9ez0WLT1oLK/Vrx3+x8ZlNeXoHk04+nP52Z/uTj6Ws9eoPBYDAY3njjjc7OzrVrUalSZnx8fO/evQ8fPszLyzty5MhLL70kkUjy8vKIaHJycnp6uqen58qVK3v27CkpKXnnnXdycnJSXeRUKd4iI2KfywLPkO3gHbnY7/uF24p575U15WQOn9Qb/eLFW2SBl/fveojKK/i9ZPk7UtUxRYgZEMfCwoJKpRodHX1mU15d09lvv7if++2mrQWbthZs/xYpXnn9PfuvLD872tXVdf369du3b6PBsfJ8Pt+5c+feeuut9evXd3Z2vv76608//TT3AIlEIpFI9u3bd/bs2VOnTp0/f37jxo2///3vd+3alaoyp1TR5iIiq2XCq60UBz+MaD3EPN3WGwgYgV6jiDbKKpXG86Y4swgYuYiRM66EXDAZKzxXoy+++OK5554bHR3d/q2/a708HhYwwjyn2Hfi8rjildfv37+/devWBw8erFg5E19PMpNer3/rrbcKCgrsdvubb74ZFjC48vLyOjs7+/r61q9fv3v37vHx8ZUsZ/qQHjQUkt1yclmLsccGRojKjT6TwxfqNeLz3JuKPGXJ8ncUEo3c4j+17t9N4XhGesYM93CDiAlv95k7Uje9LAsdOXLk/v37335xf5Ppv5/ZlLfo8U+te/rQyYu1//gTIqqoqPjyyy+TX0bUE7+bN28eP35cIpGMj4/v3LlTyCn79+//zW9+s379+r179y4sLCS7hOlIrK1WEzl1rXJRb9g6DK9RL+cPUUTDeZTzGxnsla1VoXroNeqXNwIhrpbLEnSpBEnHvilXG/vT4s5JIBpjGK3Z035ouGyM05aEpLh27VpXV1degeTQv1xc0on7Xn/7nut3d24O/PSnP01S2YJQT4L27t27ceNGm822pPGJ0tLStra2o0ePKhQKp3OxB+RqJG3xNZKow0ojWlG0RoCmMTQAzscOTlirGCv/c+fdeaJcthFj1Xnai5l2/zeFak2h1bz09kFR5SmDo5Z3qdRKv3bGGNNhJZIZToet2leaTEYNkd1yCZ1LSafRaJ5a9/SRf+t/al3MLo5YDp28mFcgiTPJKjFQT/h+/vOfFxQULPUsnU63f//+iYmJ7O2havGZHFN1srCPNY0Onyle4hDVAcdQOed9udHXqCYi1xy73E+sbeZeVj3UfHDHMoso1jbz7qWoMxpSOAaednu7utpEHVZFXX/UXxLdw31TlfWq0FvuFDferDgWp8GoHjId/EBfq/MEJkGHnR6a/rzi0m1vzvHx8d27d1e+pqv7p7PLu8LwZYPlZ0eJKHn1J0H1hB3njPWJe7ih2FI0dHrbmdZ2O5H/dsEkRUQU3sqJuN0K1CtGLpJIJO+///7yTp+cnPzmN7/56quvXrlyJbEFSyDs7crjNeprdZSEqpWJe7u659z+ZZbRFIUeBJEdjk5dK3f802vUc3sYrVXMSc4kiIjTPe3FGB5n6fV6Itrz8qFlX+Fv/+HNv3pmY+JKFClx9WTxW5252B5a/csPGERk7uAmQE1RvWIYZtnnSiSSmpqaq1evrujMBRDK1isPy5rOTtlSyMtS8ztuusWMqRknUdHiizNdl3QeIlIPmRw+9k+jmojMHcH09IHFk/4D+g2FTnugMzHiW/Z0a1X4UFj28fl8V69eFW/fKd4uaCg1qqfWPV28uyKBpYqQqHoiALv61+EzXdDmku2OlXc1th/MMcqOT6asXu3bt+9JTq+oqCCie/fuJag4kECqnYGB+sDMwKoRIlKfSNVwXbrFDIFsd9i+7JbQUhdpy1SdjMg64KJY6zA1/teR3wZOD5/Tln0eP35MRJu2FjzhdYRMtUq+xeqJINzVv0REZK0K/d6nNIVmW6auXkkkkic5nR0I+fDDDxNTGkioQJLdkHKjz9SiinV8sqXbvClhizO9H3xEVPhCNf+YopIXFBana85LbP/yIuswI+c8EBEtZV1o4qRbFocnf+Jv2vLXCSlJDAmqJ0J+U+Mt0FW92KQYabeTU9cq1/k/C42QEVF61SuB2JhRW1u72IGp9Plnj5cxI2N1yK0fM9WnuhAB6dbOKNpcROS0TMTYIcvVJmLkyuH7Sbu/825Kdlv0pQ32l82nvvKk/zmT/N87ZfUkt37MxJ8ww2t2xJKierUkJ06cSHXti4mSXqNAqHRrZ/jnNVtOGksiZ0aze6TI6kqU22eIAikkg9wTN+xEms1iIi+Rfx0mp1eBvw4zhROl0tnXv/51Ivr04+knvM6ns8nt6EhMPWEF5tQTkX+kJHzmZRhuhglbr7xqxGmZ8GrZbdcysV5NT08T0Y4dy50MCtkk3doZ3MWZvP145/uU7Irf8h9oc4PjQpyRTP8KL3WNlBZbhymulsvI017MG5lkt0/J+qlTX/3qVykhMeOJr7CIhNQTtr1C5sG+wCB2Q9yUQVHSz3DSyaWuXrEP/Sc8fdu2bQkpTCbhb5q0lD3AuZsmZZe0a2cQO2zoLrY47ZZaUViOsMKmKXYXRmnLULm1KmIdpqLuoL9nOe46TP/SyojFn6HTs9aaNWtKSkomJu7MTk/mFSxzZPXzzx5Pu36X2IJFSkw9qdCQ1RyqJzJNuSx28lGxtlqt64gcsfBPYklZvRoYGNDpdIsfF8OtW7eIKNv21YiYNk1EdkutyBI2QAV86dfOIGI3WDcFpzn5aRp56cBUB8JWb6qHTA7OCq/46zDDviV2RXEWZZuIo6enh4jesZqWfYXf/rL7wScziStRLImoJ0pTaFKKzHD6wrH4KXkXmcSSonrF/siWZ3JycmBgoKys7Nlnn01gkdJdKI+ALzRzut9QSJhzv4i0WweehdJtHTgR5eTk/O+j/zv1H+8vY9Lt5589PvPartnpSUrmOnAIYuQiIrLZbMtbpXH48OHu7u40T4qe8GfRfJ+ytZ2i5BEQusQ6MoPAapCJ68AhLXR2dn7+2eOuf67//LPHSz338k+OzE5PnjhxIhkFg1gaGhpmZ2eXelZ3d3d3d3d+fn46B4yksc9EzqwTa5t57VRb7yJp9kMHRGRTdg83hAZLwr51tbHDIaFj9KFBtcBZvGGweFdbSYgZEMX+/fvLyso8E7f7zy0t1aD9l932X3bn5+efPHkySWWDSP39/TMzM7W1teySTIEmJyd/+MMfEtHt27eTVrQ0lVtWV0g0oo18NHOE5R8ic0d42Lh7nTNpwtNezJt0IyCLzERb6BhPe3HvGD83WnAWTzrlOkLMgChEIpHNZvva174WzDYoxDv/eb5P738GYYfXlVRTU/PGG2/cvn17165dk5OTQk4ZGBhQKBSPHj3q7+/Pxn0Vxdrm/kB2WGtVaOpU6EEcngnmdJOCyHyHO9ThNI9QYETEqKHQPkvCssg4dRZ34PR+QyHRiLbYEnbBG4PzaZbrCDEDotuwYYPb7c7Pzx++bNAf3hN/7uxfPp3taqn/958cWf+Vde+99142PoNSrbOz89VXX52cnNy9e3d3d3ecIx88eHD06NHa2to///nPXV1dNTU1K1XGNCPWNodSkAVYqwIzbqdm+JlgcuvHTA4fOx8vQFF3KjCeoawpJzY3gfAsMpzT2b2VuDt2KI/5J1OkWa4j/DIIMT377LP37t1jGKarq6vle9ueU+zb8/KhQmlpcGD8L5/Oev/nzm//q+fd61eIqKys7Pr16+vXr09lobPV2rVrr1y58v3vf/+11147fPjwqVOnGIYpLS2VSCR5eXlENDk5OTs7e/Xq1Z6enkePHuXk5Lz77rvZNr82KmmLz9TCvmR3T7BbLtkqD37wUWT+oTC8zMqclTqsxbPISDeHjcDzEtUs9WorBDED4lmzZs0vfvGLo0ePHjt2bGho6D37r9jP8wok7MwolkwmM5lMzz//fLolzso29fX1KpXq/Pnzx48fj7XtVX5+vtFofPnll7O6/9Br1F/a3hy+DkN1wDG1paHYYh1wLXuLpPh4SQfS7GrCZHGlAcF27NgxODi4sLDw61//+tatWw6HY3R0VCaTffe73/3Od76jVCrz8/NTXUbwy8nJefvtt3/0ox85HI6bN2/Ozc319/eLxWK5XC6VSvfs2YMcIYEtKDSuFlXMnfjE279BNBKWf2gpEptFJn1y0iBmgFAbNmyoqanJ3u7vjLJ27drS0tLS0lIiOnt2mfstrl6qnWoasZo75C7+Eo3AtCV1jZSK52RE1qreisAYhtfI3+gzNnG1XKaztBf35nPGP8YYRmsOz4IsRGKv9sQQMwAg68RJPBPccCVaJhiBaWASm0UmvXIdYd4UAGShqIlnqNzIbshIROzEKm7ee02j8DQwic0ik065jpA7JPXSMHdIQqD+rIzVWn+4UJdWBnKHAABAIiFmAACAUIgZAAAgFGIGAAAIhZgBAABCIWYAAIBQ8Wbpbdn6jdmZj1eyNNlpc96WVfnvnLdl69zsCuzwmu1Wa/3hwrNoZQiZtL36Z3YDLMnNmzcrKiqQbBEgKvRNAfC0trb+8Y9/THUpANIUYgZAyMLCwujoaE9PT6oLApCmEDMAQsbGxojo3Llz6LMFiAoxAyDkzJkzRPTgwQN0TwFEhZgB4Md2TLGv0T0FEBViBoAf2zHFQvcUQFSIGQB+bMcUC91TAFEhZgAQ8TumWOieAoiEmAFAxO+YYqF7CiASYgYAEb9jioXuKYBIiBkAUTqmWOieAgiDmAEQpWOKhe4pgDCIGQBROqZY6J4CCIOYAdkuVscUC91TAFyIGZDtYnVMsdA9BcC1NtUFAEixP/3pTzqdLvjWYDBw3xLRw4cPc3JyVrxcAOkIey4B8IhE+E8BEBP6pgAAQCjEDAAAEAoxAwAAhELMAAAAoRAzAABAKMQMAAAQCjEDAACEQswAAAChEDMAAEAoxAwAABAKMQMAAIRCzAAAAKEQMwAAQCjEDAAAEAoxAwAAhELMAAAAoRAzAABAKMQMAAAQCjEDAACEQswAAAChEDMAAEAoxAwAABAKMQMAAIRCzAAAAKEQMwAAQCjEDAAAEAoxAwAAhELMAAAAoRAzAABAKMQMSJaqV74nykBElOoiLE3VK99L9Y8asojI5/OlugywOolEIpMDtSvpGDn+F8PKQTsDAACEQswAAAChEDMAAEAoxAwAABAKMQMy23yfkpErh70RX3iNermIabMJuYirTcTIGZfQe7qHG0RMg3E+1vdLuTVAZkHMAAAAodamugAAGaeo8oKvMtWFAEgJtDMAAEAoxAxY/aKNebiHG6IMObjaRIyc/RMc3vAfOd+nZOQiRq4c9kaOZ9h65YETMYwBqxpiBqx+uWV1hWR3jLpDH439q8VJ5RUq7mF32kQd1uA7cwc3zLjPXGy3ExHJ6krE/Kt7jXp51UjwrbWKOWlJbPkB0gfGM2AVsFtqRfGe0+JquUxnuTE4X6/NJSIi1y0zkWanknuQecSqaXSYpERENN+nbG23Wy7ZKluKiYicdmqaMtUXERERJ/aQe/ikzkNU2DTVzH7rNeprdZ6E/dUA0gvaGZANikpeUJDTMuFvN9juWInUNVLeMYq6flPwk9z6njoZkXUg0EOlqfYHDD7voMNJpB5qDn4r1jYbNYn/GwCkB8QMWAUUdf0+k4P/p99QyDkit/5EebB7amxghMI7poikm3mdTkUlLyiIXHNsmJHtyI19+8Jtxbz3ypryJ/jLAKQzxAzIEqqdavLcGJyP3jEFAIIgZkC2kFZoyGmZ8NruWKmw6Zg0/PtAk8LPPXHDHtH4iM5zb4r3fmxgJMaRAJkOMQOyhrKmnOyOSwMfkUJeFjk4YbfUhtKHuNqKLc7IMY8IYm21mshape8LDIx7jXqtOZHFBkgnmDcF2UO1U00jVjPJDIejtB405Wpzh5z7uNc0tqj4s6SikB40FFp1nvZipt3/SaFaU2g1Y+oUrEpoZ0AWkR40FBIVvlAddUB7Z8tUnSzwRmY47TAt0shgibXNDs6J6qHmgzuevKgA6Qm7QkKypOHervN9ytZ2qusfqxQwSpEpsLcrrCS0MyB72K6326Ms5AYAwTCeAdnA1htI71H+A22clRYAEB/aGZANirfIiIgKm6YOYFkGwBNAOwOyAXa8AEgMtDMAAEAoxAwAABAKfVOQ4cJzj4fymQNAwqGdAZnLPdwgYsI3qzB3yEWhTB4AkFCIGZCp/CmhSNPITYFu1BCRp/0QfydXAEgMxAzITGNMhzVahg+lyWTUENktl7AvN0DiIWZARnLdMhMp6k5FW6CnPFbXNGRqCW6p5B5uEDHywJ8G43zoUPdwQ5xP3MMNIqbNNt+nZOQiJrA9uKuNczV5KBVu1NuhlwxWGcQMyETuOTfFzgJSVFkfCBheo17OdmEFOHWtUR70cW515mK7nch/O1ebqMPK/drcEYglUW/naS9m2tDigdUDMQMy0dSMk6ho+6JZQFyXdB4iUg8FBzwa1URk7hD+HHfaqWnK5PCZLmhz/RuJD/GHTwJbxpJ7+KTOQ1TIHh+8nbWqd2zZf1OA9IKYAauY7Q475hHqpyIpm/DcOiC4qaGprudv0GStCnVnKU0mh6+ZPcA76HASqYeaOceztxu5haYGrBJYnwGZqHiLjMj9wTyp4jU1vB98FGW3jKKSFxQWp2vOS1IhCW5lOzinq15sUoy028mpa5Xr/J+puWMnRNYqhtd5xVqsqAAZAu0MyERFm4uInJaJGBNqXW0iRq4cvp/4G+fWj5kcQ+Xcj7jNjlicdxc5ACBDoJ0BGYndUdVy0lhyIWLqlNc4aCWS1ZUot88QjdwYnK/nHuOeuGEn0mwONjKcd+eJAgdMzTiJZBSX6oDDd8D/2tYrrxpxWia8WjYHYmHTVHN95GbjAKsE2hmQmcTaajU7CUrJXb4336dkV4aX/0CbS6qd7DGcEW//SkB1jZTI314h82BfYBC7wb/NRnReo14u4s+D8mdZJyISV8tl5Gkv5o14jzFM+CkAGQy7QkKyJH9vV/dwA38ebQDnl/3QbkscitD2rmMMozWHvpFpysk8QobTF7S57PX9r/0i5toSEWdIIzz5VcTtkgB7u8JKQjsDMldR5QV/shAOTWNwIhMRkeqAY6qO29ekHjI5OE9wpel0k8L/WmY4feHYlri3lLb4QscTEVG50RcaAxdrm8NuJzOcdqyq7cchy+E3FEiW5LczgAjtDFhZaGcAAIBQiBkAACAUYgYAAAiFmAEAAEIhZgAAgFCIGQAAIBRm6QEAgFBoZwAAgFCIGQAAIBRiBgAACIWYAQAAQiFmAACAUIgZAAAg1P8Dq1SMILVgey8AAAAASUVORK5CYII="},1727:function(e,t,n){t.Z=n.p+"assets/images/C-CPP-93112446c26e3cf12ee5bc733f529db0.png"}}]);