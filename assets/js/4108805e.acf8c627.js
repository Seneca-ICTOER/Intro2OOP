"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[869],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),h=i,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4964:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=t(3117),i=(t(7294),t(3905));const r={id:"helper-functions",title:"Helper Functions",sidebar_position:6,description:"TBD"},o="Helper Functions",l={unversionedId:"C-Encapsulation/helper-functions",id:"C-Encapsulation/helper-functions",title:"Helper Functions",description:"TBD",source:"@site/docs/C-Encapsulation/helper-functions.md",sourceDirName:"C-Encapsulation",slug:"/C-Encapsulation/helper-functions",permalink:"/C-Encapsulation/helper-functions",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2OOP/tree/main/docs/C-Encapsulation/helper-functions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"helper-functions",title:"Helper Functions",sidebar_position:6,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Classes and Resources",permalink:"/C-Encapsulation/classes-and-resources"},next:{title:"Input and Output Operators",permalink:"/C-Encapsulation/input-and-output-operators"}},s={},d=[{value:"Free Helpers",id:"free-helpers",level:2},{value:"Comparison",id:"comparison",level:3},{value:"Example",id:"example",level:3},{value:"The Cost of Upgrading Freedom",id:"the-cost-of-upgrading-freedom",level:3},{value:"Helper Operators",id:"helper-operators",level:2},{value:"Identity Comparison",id:"identity-comparison",level:3},{value:"Addition",id:"addition",level:3},{value:"Friendship",id:"friendship",level:2},{value:"The Cost of Friendship",id:"the-cost-of-friendship",level:3},{value:"Friendly Classes (Optional)",id:"friendly-classes-optional",level:3},{value:"No Reciprocity, Transitivity or Exclusivity (Optional)",id:"no-reciprocity-transitivity-or-exclusivity-optional",level:3},{value:"Summary",id:"summary",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"helper-functions"},"Helper Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support a class definition with global function definitions"),(0,i.kt)("li",{parentName:"ul"},"Describe the syntax for overloading operators that support a class"),(0,i.kt)("li",{parentName:"ul"},"Grant a global function access to the private members of a class")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Avoid membership fees: Where possible, prefer making functions nonmember non-friends" ',(0,i.kt)("strong",{parentName:"p"},"Sutter, Alexandrescu, 2005."))),(0,i.kt)("p",null,"In object-oriented programming, not all instructions that support a class need to be included in the class definition. A well-encapsulated class can accept external support in the form of global functions containing additional logic. We call these functions helper functions. Helper functions access the objects of a class solely through their parameters, all of which are explicit. A typical helper function includes at least one parameter of the class type that it supports."),(0,i.kt)("p",null,"This chapter describes the definition of helper functions, including helper operators, and discusses the granting of privileged access to the private members of a class."),(0,i.kt)("h2",{id:"free-helpers"},"Free Helpers"),(0,i.kt)("p",null,"A free or loosely coupled helper function is a function that obtains all of its information from the public member functions of the class that it supports. A free helper function does not require access to the private members of its class. The coupling between a free helper function and its class is minimal, which is an ideal design solution."),(0,i.kt)("h3",{id:"comparison"},"Comparison"),(0,i.kt)("p",null,"Consider a helper function that compares two objects of the same class. The function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the objects have the same data values and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if they differ."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Let us add three queries (",(0,i.kt)("inlineCode",{parentName:"p"},"getStudentNo()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getNoGrades()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getGrade()"),") to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," class definition and a helper function named ",(0,i.kt)("inlineCode",{parentName:"p"},"areIdentical()")," as support. For conciseness, let us assume that all grades are stored in static memory. We insert the prototype for our helper function into the header file ",(0,i.kt)("strong",{parentName:"p"},"after")," the class definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Student.h\n\nconst int NG = 20;\n\nclass Student {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(int, const float*, int);\n    void display() const;\n    int getStudentNo() const { return no; }\n    int getNoGrades() const { return ng; }\n    float getGrade(int i) const { return i < ng ? grade[i] : 0.0f; }\n};\n\nbool areIdentical(const Student&, const Student&);\n")),(0,i.kt)("p",null,"The implementation file contains the definition of our helper function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Student.cpp\n\n#include <iostream>\nusing namespace std;\n#include "Student.h"\n\nStudent::Student() {\n    no = 0;\n    ng = 0;\n}\n\nStudent::Student(int n) {\n    *this = Student(n, nullptr, 0);\n}\n\nStudent::Student(int sn, const float* g, int ng_) {\n    bool valid = sn > 0 && g != nullptr && ng_ >= 0;\n    if (valid)\n        for (int i = 0; i < ng_ && valid; i++)\n            valid = g[i] >= 0.0f && g[i] <= 100.0f;\n\n    if (valid) {\n        // accept the client\'s data\n        no = sn;\n        ng = ng_ < NG ? ng_ : NG;\n        for (int i = 0; i < ng; i++)\n            grade[i] = g[i];\n    } else {\n        *this = Student();\n    }\n}\n\nvoid Student::display() const {\n    if (no > 0) {\n        cout << no << ":\\n";\n        cout.setf(ios::fixed);\n        cout.precision(2);\n        for (int i = 0; i < ng; i++) {\n            cout.width(6);\n            cout << grade[i] << endl;\n        }\n        cout.unsetf(ios::fixed);\n        cout.precision(6);\n    } else {\n        cout << "no data available" << endl;\n    }\n}\n\nbool areIdentical(const Student& lhs, const Student& rhs) {\n    bool same = lhs.getStudentNo() == rhs.getStudentNo() &&\n    lhs.getNoGrades() == rhs.getNoGrades();\n    for (int i = 0; i < lhs.getNoGrades() && same; i++)\n        same = lhs.getGrade(i) == rhs.getGrade(i);\n    return same;\n}\n')),(0,i.kt)("p",null,"The following client code compares the two objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Compare Objects\n// compare.cpp\n\n#include <iostream>\n#include "Student.h"\nusing namespace std;\n\nint main () {\n    float gh[] = {89.4f, 67.8f, 45.5f};\n    Student harry(1234, gh, 3), harry_(1234, gh, 3);\n    if (areIdentical(harry, harry_))\n        cout << "are identical" << endl;\n    else\n        cout << "are different" << endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"are identical\n")),(0,i.kt)("h3",{id:"the-cost-of-upgrading-freedom"},"The Cost of Upgrading Freedom"),(0,i.kt)("p",null,"Free helper functions use public queries to access information that is otherwise inaccessible. If we add a data member to the class, we may also need to add a query to access its value. As we add data members, the class definition grows with new queries. We call this growth class bloat."),(0,i.kt)("p",null,"One alternative to class bloat that admits upgradability is ",(0,i.kt)("a",{parentName:"p",href:"/C-Encapsulation/helper-functions#friendship"},"friendship"),"."),(0,i.kt)("h2",{id:"helper-operators"},"Helper Operators"),(0,i.kt)("p",null,"Helper operators are global functions that overload operators. Candidates for helper operators are operators that do not change the values of their operands as shown in the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Effect on Operand(s)"),(0,i.kt)("th",{parentName:"tr",align:null},"Candidate"),(0,i.kt)("th",{parentName:"tr",align:null},"Operands"),(0,i.kt)("th",{parentName:"tr",align:null},"Operator"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Left Operand changes"),(0,i.kt)("td",{parentName:"tr",align:null},"Member"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"++")," ",(0,i.kt)("inlineCode",{parentName:"td"},"--")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," ",(0,i.kt)("inlineCode",{parentName:"td"},"+")," ",(0,i.kt)("inlineCode",{parentName:"td"},"!")," ",(0,i.kt)("inlineCode",{parentName:"td"},"&")," ",(0,i.kt)("inlineCode",{parentName:"td"},"*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Left Operand changes"),(0,i.kt)("td",{parentName:"tr",align:null},"Member"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"+=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"*=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"/=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"%="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Neither Operand changes"),(0,i.kt)("td",{parentName:"tr",align:null},"Helper"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," ",(0,i.kt)("inlineCode",{parentName:"td"},"*")," ",(0,i.kt)("inlineCode",{parentName:"td"},"/")," ",(0,i.kt)("inlineCode",{parentName:"td"},"%")," ",(0,i.kt)("inlineCode",{parentName:"td"},"==")," ",(0,i.kt)("inlineCode",{parentName:"td"},"!=")," ",(0,i.kt)("inlineCode",{parentName:"td"},">=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"<=")," ",(0,i.kt)("inlineCode",{parentName:"td"},">")," ",(0,i.kt)("inlineCode",{parentName:"td"},"<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"<<")," ",(0,i.kt)("inlineCode",{parentName:"td"},">>"))))),(0,i.kt)("h3",{id:"identity-comparison"},"Identity Comparison"),(0,i.kt)("p",null,"To improve readability, let us replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"areIdentical()")," function defined above with an overloaded ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," operator that takes two ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," operands. The header file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," class now contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Student.h\n\nconst int NG = 20;\n\nclass Student {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(int, const float*, int);\n    void display() const;\n    int getStudentNo() const { return no; }\n    int getNoGrades() const { return ng; }\n    float getGrade(int i) const { return i < ng ? grade[i] : 0.0f; }\n};\n\nbool operator==(const Student&, const Student&);\n")),(0,i.kt)("p",null,"The implementation file contains defines this helper operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool operator==(const Student& lhs, const Student& rhs) {\n    bool same = lhs.getStudentNo() == rhs.getStudentNo() &&\n    lhs.getNoGrades() == rhs.getNoGrades();\n    for (int i = 0; i < lhs.getNoGrades() && same; i++)\n        same = lhs.getGrade(i) == rhs.getGrade(i);\n    return same;\n}\n")),(0,i.kt)("p",null,"The following client code compares the two objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Compare Objects\n// compare.cpp\n\n#include <iostream>\n#include "Student.h"\nusing namespace std;\n\nint main () {\n    float gh[] = {89.4f, 67.8f, 45.5f};\n    Student harry(1234, gh, 3), harry_(1234, gh, 3);\n    if (harry == harry_)\n        cout << "are identical" << endl;\n    else\n        cout << "are different" << endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"are identical\n")),(0,i.kt)("h3",{id:"addition"},"Addition"),(0,i.kt)("p",null,"Consider an expression that adds a single grade to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," object and evaluates to a copy of the updated object. To implement this operation, let us overload the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," object as the left operand and a ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," as the right operand."),(0,i.kt)("p",null,"As part of the class definition, we include the ",(0,i.kt)("inlineCode",{parentName:"p"},"+=")," operator described in the preceding chapter on ",(0,i.kt)("a",{parentName:"p",href:"/C-Encapsulation/member-operators"},"Member Operators"),". The header file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," class now contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Student.h\n\nconst int NG = 20;\n\nclass Student {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(int, const float*, int);\n    const Student& operator+=(float);\n    void display() const;\n    int getStudentNo() const { return no; }\n    int getNoGrades() const { return ng; }\n    float getGrade(int i) const { return i < ng ? grade[i] : 0.0f; }\n};\n\nbool operator==(const Student&, const Student&);\nStudent operator+(const Student&, float);\n")),(0,i.kt)("p",null,"We maintain loose coupling by initializing a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," object to the left operand and calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"+=")," member operator on that object to add the single grade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Student operator+(const Student& s, float grade) {\n    Student copy = s; // makes a copy\n    copy += grade;    // calls the += operator on copy\n    return copy;      // return updated copy\n}\n")),(0,i.kt)("p",null,"For symmetry, we overload the addition operator for identical operand types but in reverse order. The complete header file contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"// Student.h\n\nconst int NG = 20;\n\nclass Student {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(int, const float*, int);\n    const Student& operator+=(float);\n    void display() const;\n    int getStudentNo() const { return no; }\n    int getNoGrades() const { return ng; }\n    float getGrade(int i) const { return i < ng ? grade[i] : 0.0f; }\n};\n\nbool operator==(const Student&, const Student&);\nStudent operator+(const Student&, float);\nStudent operator+(float, const Student&);\n")),(0,i.kt)("p",null,"Our implementation calls the first version with the arguments reversed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Student.cpp\n\n#include <iostream>\nusing namespace std;\n#include "Student.h"\n\nStudent::Student() {\n    no = 0;\n    ng = 0;\n}\n\nStudent::Student(int n) {\n    float g[] = {0.0f};\n    *this = Student(n, g, 0);\n}\n\nStudent::Student(int sn, const float* g, int ng_) {\n    bool valid = sn > 0 && g != nullptr && ng_ >= 0;\n    if (valid)\n        for (int i = 0; i < ng_ && valid; i++)\n            valid = g[i] >= 0.0f && g[i] <= 100.0f;\n\n    if (valid) {\n        // accept the client\'s data\n        no = sn;\n        ng = ng_ < NG ? ng_ : NG;\n        for (int i = 0; i < ng; i++)\n            grade[i] = g[i];\n    } else {\n        *this = Student();\n    }\n}\n\nvoid Student::display() const {\n    if (no > 0) {\n        cout << no << ":\\n";\n        cout.setf(ios::fixed);\n        cout.precision(2);\n        for (int i = 0; i < ng; i++) {\n            cout.width(6);\n            cout << grade[i] << endl;\n        }\n        cout.unsetf(ios::fixed);\n        cout.precision(6);\n    } else {\n        cout << "no data available" << endl;\n    }\n}\n\nconst Student& Student::operator+=(float g) {\n    if (no != 0 && ng < NG && g >= 0.f && g <= 100.f)\n        grade[ng++] = g;\n    return *this;\n}\n\nbool operator==(const Student& lhs, const Student& rhs) {\n    bool same = lhs.getStudentNo() == rhs.getStudentNo() &&\n    lhs.getNoGrades() == rhs.getNoGrades();\n    for (int i = 0; i < lhs.getNoGrades() && same; i++)\n        same = lhs.getGrade(i) == rhs.getGrade(i);\n    return same;\n}\n\nStudent operator+(const Student& student, float grade) {\n    Student copy = student; // makes a copy\n    copy += grade;          // calls the += operator on copy\n    return copy;            // return updated copy\n}\n\nStudent operator+(float grade, const Student& student) {\n    return student + grade; // calls operator+(const\n                            //    Student&, float)\n}\n')),(0,i.kt)("p",null,"The following client code produces the results shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Helper Operator\n// helper-addition-operator.cpp\n\n#include <iostream>\n#include "Student.h"\nusing namespace std;\n\nint main () {\n    float gh[] = {89.4f, 67.8f, 45.5f};\n    Student harry(1234, gh, 3);\n    harry = harry + 63.7f;\n    harry.display();\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"1234:\n 89.40\n 67.80\n 45.50\n 63.70\n")),(0,i.kt)("h2",{id:"friendship"},"Friendship"),(0,i.kt)("p",null,"Friendship grants helper functions access to the private members of a class. By granting friendship status, a class lets a helper function access to any of its private members: data members or member functions. Friendship minimizes class bloat."),(0,i.kt)("p",null,"To grant a helper function friendship status, we declare the function a friend and place its declaration inside the class definition. A friendship declaration takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"friend Type identifier(type [, type, ...]);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," is the return type of the function and ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," is the function's name."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Student.h\n\nconst int NG = 20;\n\nclass Student {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(int, const float*, int);\n    const Student& operator+=(float);\n    void display() const;\n    friend bool operator==(const Student&, const Student&);\n};\n\nStudent operator+(const Student&, float);\nStudent operator+(float, const Student&);\n")),(0,i.kt)("p",null,"Our implementation looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Student.cpp\n\n#include <iostream>\nusing namespace std;\n#include "Student.h"\n\nStudent::Student() {\n    no = 0;\n    ng = 0;\n}\n\nStudent::Student(int n) {\n    float g[] = {0.0f};\n    *this = Student(n, g, 0);\n}\n\nStudent::Student(int sn, const float* g, int ng_) {\n    bool valid = sn > 0 && g != nullptr && ng_ >= 0;\n    if (valid)\n        for (int i = 0; i < ng_ && valid; i++)\n            valid = g[i] >= 0.0f && g[i] <= 100.0f;\n\n    if (valid) {\n        // accept the client\'s data\n        no = sn;\n        ng = ng_ < NG ? ng_ : NG;\n        for (int i = 0; i < ng; i++)\n            grade[i] = g[i];\n    } else {\n        *this = Student();\n    }\n}\n\nvoid Student::display() const {\n    if (no > 0) {\n        cout << no << ":\\n";\n        cout.setf(ios::fixed);\n        cout.precision(2);\n        for (int i = 0; i < ng; i++) {\n            cout.width(6);\n            cout << grade[i] << endl;\n        }\n        cout.unsetf(ios::fixed);\n        cout.precision(6);\n    } else {\n        cout << "no data available" << endl;\n    }\n}\n\nconst Student& Student::operator+=(float g) {\n    if (no != 0 && ng < NG && g >= 0.f && g <= 100.f)\n        grade[ng++] = g;\n    return *this;\n}\n\nStudent operator+(const Student& student, float grade) {\n    Student copy = student; // makes a copy\n    copy += grade;          // calls the += operator on copy\n    return copy;            // return updated copy\n}\n\nStudent operator+(float grade, const Student& student) {\n    return student + grade; // calls operator+(const\n                            //    Student&, float)\n}\n\nbool operator==(const Student& lhs, const Student& rhs) {\n    bool same = lhs.no == rhs.no &&  lhs.ng == rhs.ng;\n    for (int i = 0; i < lhs.ng && same; i++)\n        same = lhs.grade[i] == rhs.grade[i];\n    return same;\n}\n')),(0,i.kt)("p",null,"We have added the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"friend")," to the declaration within the class definition. We do not apply the keyword to the function definition."),(0,i.kt)("p",null,"The following client code compares the two objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Friends\n// friends.cpp\n\n#include <iostream>\n#include "Student.h"\nusing namespace std;\n\nint main () {\n    float gh[] = {89.4f, 67.8f, 45.5f};\n    Student harry(1234, gh, 3), harry_(1234, gh, 3);\n    harry_ += 63.7f;\n    if (harry == harry_)\n        cout << "are identical" << endl;\n    else\n        cout << "are different" << endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"are different\n")),(0,i.kt)("h3",{id:"the-cost-of-friendship"},"The Cost of Friendship"),(0,i.kt)("p",null,"A class definition that grants friendship to a helper function allows that function to alter the values of its private data members. Granting friendship pierces encapsulation."),(0,i.kt)("p",null,"As a rule, we grant friendship judiciously only to helper functions that require both ",(0,i.kt)("strong",{parentName:"p"},"read and write access")," to the private data members. Where read-only access is all that a helper function needs, using queries is probably more advisable."),(0,i.kt)("p",null,"Friendship is the strongest relationship that a class can grant an external entity."),(0,i.kt)("h3",{id:"friendly-classes-optional"},"Friendly Classes (Optional)"),(0,i.kt)("p",null,"One class can grant another class access to its private members. A class friendship declaration takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"friend class Identifier;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier")," is the name of the class to which the host class grants friendship privileges."),(0,i.kt)("p",null,"For example, an ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," class needs access to all information held within each ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," object. To grant this access, we simply include a class friendship declaration within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," class definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Student.h\n\nconst int M = 13;\n\nclass Student {\n    int no;\n    char grade[M+1];\npublic:\n    Student();\n    Student(int);\n    Student(int, const char*);\n    void display() const;\n    const Student& operator+=(char);\n    friend bool areIdentical(const Student&, const Student&);\n    friend class Administrator;\n};\n")),(0,i.kt)("h3",{id:"no-reciprocity-transitivity-or-exclusivity-optional"},"No Reciprocity, Transitivity or Exclusivity (Optional)"),(0,i.kt)("p",null,"Friendship is neither reciprocal, transitive nor exclusive. Just because one class is a friend of another class does not mean that the latter is a friend of the former. Just because a class is a friend of another class and that other class is a friend of yet another class does not mean that the latter class is a friend of either of them. A friend of one class may be a friend of any other class."),(0,i.kt)("p",null,"Consider three classes: a ",(0,i.kt)("inlineCode",{parentName:"p"},"Student"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Auditor"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auditor")," be a friend of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," be a friend of the Student"),(0,i.kt)("li",{parentName:"ul"},"Just because the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auditor")," is a friend of any ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," is a friend of any Student, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," is not necessarily a friend of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auditor")," and the Student is not necessarily a friend of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," (lack of reciprocity)"),(0,i.kt)("li",{parentName:"ul"},"Just because the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auditor")," is a friend of any ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator")," is a friend of any Student, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auditor")," is not necessarily a friend of any ",(0,i.kt)("inlineCode",{parentName:"li"},"Student")," (lack of transitivity)")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A helper function is a global function that supports a class"),(0,i.kt)("li",{parentName:"ul"},"A helper function refers to the class that it supports through its explicit parameter(s)"),(0,i.kt)("li",{parentName:"ul"},"A helper operator is typically an operator that does not change the value of its operands"),(0,i.kt)("li",{parentName:"ul"},"A friend function has direct access to the private members of the class that granted the function friendship"),(0,i.kt)("li",{parentName:"ul"},"Friendship is neither reciprocal, transitive, nor exclusive"),(0,i.kt)("li",{parentName:"ul"},"Free helper functions reduce coupling at the cost of bloating a class"),(0,i.kt)("li",{parentName:"ul"},"Friendly helper functions reduce bloating at the cost of piercing encapsulation")))}c.isMDXComponent=!0}}]);