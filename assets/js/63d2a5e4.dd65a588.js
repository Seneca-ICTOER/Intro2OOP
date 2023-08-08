"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[678],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6592:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(3117),r=(t(7294),t(3905));const i={id:"abstract-base-classes",title:"Abstract Base Classes",sidebar_position:2,description:"TBD"},o="Abstract Base Classes",s={unversionedId:"E-Polymorphism/abstract-base-classes",id:"E-Polymorphism/abstract-base-classes",title:"Abstract Base Classes",description:"TBD",source:"@site/docs/E-Polymorphism/abstract-base-classes.md",sourceDirName:"E-Polymorphism",slug:"/E-Polymorphism/abstract-base-classes",permalink:"/E-Polymorphism/abstract-base-classes",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2OOP/tree/main/docs/E-Polymorphism/abstract-base-classes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"abstract-base-classes",title:"Abstract Base Classes",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Virtual Functions",permalink:"/E-Polymorphism/virtual-functions"},next:{title:"Templates",permalink:"/E-Polymorphism/templates"}},l={},c=[{value:"Pure Virtual Function",id:"pure-virtual-function",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Example",id:"example",level:3},{value:"Implementations",id:"implementations",level:3},{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Definition",id:"definition",level:3},{value:"Example",id:"example-1",level:3},{value:"Array of Pointers",id:"array-of-pointers",level:2},{value:"Person Example",id:"person-example",level:3},{value:"Client Code",id:"client-code",level:3},{value:"Interface",id:"interface",level:3},{value:"Concrete Class Definitions",id:"concrete-class-definitions",level:3},{value:"Implementations",id:"implementations-1",level:3},{value:"Unit Tests on an Interface",id:"unit-tests-on-an-interface",level:2},{value:"Example",id:"example-2",level:3},{value:"Sorter Module",id:"sorter-module",level:3},{value:"Unit Tester",id:"unit-tester",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"abstract-base-classes"},"Abstract Base Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design polymorphic objects to amplify the reusability of code"),(0,r.kt)("li",{parentName:"ul"},"Introduce pure virtual functions"),(0,r.kt)("li",{parentName:"ul"},"Demonstrate a unit test of an interface")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Program to an interface, not an implementation" ',(0,r.kt)("strong",{parentName:"p"},"Gamma, Helm, Johnson, Vlissides, 1994."))),(0,r.kt)("p",null,"Object-oriented languages use interfaces to define the single identifier to multiple meanings that polymorphism provides. Separating the interface from its various implementations promotes low coupling between the client code and an object's class hierarchy. The interface specifies what any object in the hierarchy offers to a client, while each implementation specifies how the interface provides what it has offered to its clients. This separation of concerns is central to software engineering. The interface effectively hides the hierarchy from its clients. We can upgrade the hierarchy by adding derived classes without having to change the client code. We can upgrade the client code without having to change the hierarchy."),(0,r.kt)("p",null,"C++ supports the distinction between an interface and its implementations through abstract and concrete classes. An abstract class is a base class that defines an interface, while a concrete class is a derived class that implements that interface. The abstract class identifies the member functions that the class hierarchy exposes to its clients and is the gateway to testing the derived classes in its own inheritance hierarchy. Each concrete class gives a specific meaning to the interface."),(0,r.kt)("p",null,"This chapter describes pure virtual functions, which are the principal components of an abstract base class. The chapter shows how to define an abstract class and use it with an array of pointers in client code. This chapter concludes with an example of a unit test on an abstract base class."),(0,r.kt)("h2",{id:"pure-virtual-function"},"Pure Virtual Function"),(0,r.kt)("p",null,"The principal component of an abstract base class is a ",(0,r.kt)("em",{parentName:"p"},"pure virtual member function"),". ",(0,r.kt)("em",{parentName:"p"},"Pure")," refers to the lack of any implementation detail. That is, a pure virtual function is a signature without a definition. The client code only requires access to the signature."),(0,r.kt)("h3",{id:"declaration"},"Declaration"),(0,r.kt)("p",null,"The declaration of a pure virtual function takes the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual Type identifier(parameters) = 0;\n")),(0,r.kt)("p",null,"The assignment to 0 identifies the virtual function as pure. A pure function must be a virtual member function."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"We define the pure virtual function for the signature ",(0,r.kt)("inlineCode",{parentName:"p"},"display(std::ostream&) const")," using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void display(std::ostream&) const = 0;\n")),(0,r.kt)("h3",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"A pure virtual member function typically has multiple definitions within its hierarchy. Each definition has the same signature as the pure virtual function but a different meaning. That is, it provides the client with the implementation that suits a specific dynamic type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pure virtual memory",src:t(3370).Z,width:"386",height:"278"})),(0,r.kt)("p",null,"Note that the separation between the client and the hierarchy's implementation is crisp. The client code does not need any access to the variety of implementations available within the hierarchy. The implementation code has no access to the client codes that use the hierarchy."),(0,r.kt)("h2",{id:"abstract-classes"},"Abstract Classes"),(0,r.kt)("p",null,"An abstract class is a class that contains or inherits a pure virtual function. Because the class provides no implementation(s) for its pure virtual function(s), the compiler cannot instantiate the class. Any attempt to create an instance of an abstract base class generates a compiler error."),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"The definition of any abstract base class contains or inherits at least one pure virtual member function. The class definition contains the declaration of the pure virtual function. We call an abstract base class without any data members a ",(0,r.kt)("em",{parentName:"p"},"pure interface"),"."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Let us define an abstract base class named ",(0,r.kt)("inlineCode",{parentName:"p"},"iPerson")," for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," hierarchy and use this class to expose the hierarchy's ",(0,r.kt)("inlineCode",{parentName:"p"},"display()")," function to any client code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pure virtual memory",src:t(8806).Z,width:"228",height:"192"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"iPerson.h")," header file defines our abstract class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Abstract Base Class for the Person Hierarchy\n// iPerson.h\n\n#include <iostream>\n\nclass iPerson {\npublic:\n    virtual void display(std::ostream&) const = 0;\n};\n")),(0,r.kt)("p",null,"We derive our ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," hierarchy from this interface. The header file that defines our ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Student")," class includes the header file that defines our abstract base class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Late Binding\n// Student.h\n\n#include <iostream>\n#include "iPerson.h"\nconst int NC = 30;\nconst int NG = 20;\n\nclass Person : public iPerson {\n    char name[NC+1];\npublic:\n    Person();\n    Person(const char*);\n    void display(std::ostream&) const;\n};\n\nclass Student : public Person {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(const char*, int, const float*, int);\n    void display(std::ostream&) const;\n};\n')),(0,r.kt)("p",null,"The class definitions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Student")," classes inform the compiler that each concrete class implements its own version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"display()")," member function."),(0,r.kt)("h2",{id:"array-of-pointers"},"Array of Pointers"),(0,r.kt)("p",null,"A systematic technique for accessing objects of different dynamic type within the same hierarchy is through an array of pointers of their static type. The executable code dereferences each pointer at run time based on its object's dynamic type."),(0,r.kt)("h3",{id:"person-example"},"Person Example"),(0,r.kt)("p",null,"The following code demonstrates the use of an array of pointers to ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," objects. The objects pointed to by the array elements may be of differing dynamic type, but are of the same static type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson()")," global function creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," object and returns its address."),(0,r.kt)("h3",{id:"client-code"},"Client Code"),(0,r.kt)("p",null,"The following client code manages ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," objects through the array of pointers ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". The output generated for the input provided is listed below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Array of Pointers\n// array_of_pointers.cpp\n\n#include <iostream>\n#include "iPerson.h"\n\nconst int NP = 5;\n\nint main() {\n    iPerson* p[NP];\n    for (int i = 0; i < NP; i++)\n        p[i] = nullptr;\n\n    int n = 0;\n    bool quit = false;\n    do {\n        iPerson* ptemp = CreatePerson();\n        if (ptemp != nullptr) {\n            p[n++] = ptemp;\n        } else {\n            quit = true;\n        }\n    } while(n < NP && !quit);\n\n    for (int j = 0; j < n; j++) {\n        p[j]->display(std::cout);\n        std::cout << std::endl;\n    }\n\n    for (int j = 0; j < n; j++)\n        delete p[j];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Type (0,1,2) : 1\nName: Jane Doe\nType (0,1,2) : 2\nName: Harry\nStudent Number : 1234\nNumber of Grades : 3\nGrade 1 : 45.6\nGrade 2 : 67.8\nGrade 3 : 89.5\nType (0,1,2) : 0\nJane Doe\nHarry 1234:\n 45.60\n 67.80\n 89.50\n")),(0,r.kt)("h3",{id:"interface"},"Interface"),(0,r.kt)("p",null,"The interface to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," object includes the prototype for a global function that creates the object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Abstract Base Class for the Person Hierarchy\n// iPerson.h\n\n#include <iostream>\n\nclass iPerson {\npublic:\n    virtual void display(std::ostream&) const = 0;\n};\n\niPerson* CreatePerson();\n")),(0,r.kt)("h3",{id:"concrete-class-definitions"},"Concrete Class Definitions"),(0,r.kt)("p",null,"The concrete class definitions specify the various implementations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"iPerson")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Person and Student Concrete Classes\n// Student.h\n\n#include "iPerson.h"\nconst int NC = 30;\nconst int NG = 20;\n\nclass Person : public iPerson {\n    char name[NC+1];\npublic:\n    Person();\n    Person(const char*);\n    void display(std::ostream&) const;\n};\n\nclass Student : public Person {\n    int no;\n    float grade[NG];\n    int ng;\npublic:\n    Student();\n    Student(int);\n    Student(const char*, int, const float*, int);\n    void display(std::ostream&) const;\n};\n\niPerson* CreatePerson();\n')),(0,r.kt)("p",null,"The prototype for ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson()")," is repeated for documentation."),(0,r.kt)("h3",{id:"implementations-1"},"Implementations"),(0,r.kt)("p",null,"Each concrete class that declares the ",(0,r.kt)("inlineCode",{parentName:"p"},"display()")," member function in its definition defines its own version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"display()")," function. The implementation file also defines the global ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Person Hierarchy - Implementation\n// person.cpp\n\n#include <iostream>\n#include <cstring>\n#include "Student.h"\n\nPerson::Person() {\n    name[0] = \'\\0\';\n}\n\nPerson::Person(const char* nm) {\n    std::strncpy(name, nm, NC);\n    name[NC] = \'\\0\';\n}\n\nvoid Person::display(std::ostream& os) const {\n    os << name << \' \';\n}\n\nStudent::Student() {\n    no = 0;\n    ng = 0;\n}\n\nStudent::Student(int n) {\n    *this = Student("", n, nullptr, 0);\n}\n\nStudent::Student(const char* nm, int sn, const float* g, int ng_) : Person(nm) {\n    bool valid = sn > 0 && g != nullptr && ng_ >= 0;\n    if (valid)\n        for (int i = 0; i < ng_ && valid; i++)\n            valid = g[i] >= 0.0f && g[i] <= 100.0f;\n\n    if (valid) {\n        // accept the client\'s data\n        no = sn;\n        ng = ng_ < NG ? ng_ : NG;\n        for (int i = 0; i < ng; i++)\n            grade[i] = g[i];\n    } else {\n        *this = Student();\n    }\n}\n\nvoid Student::display(std::ostream& os) const {\n    if (no > 0) {\n        Person::display(os);\n        os << no << ":\\n";\n        os.setf(std::ios::fixed);\n        os.precision(2);\n        for (int i = 0; i < ng; i++) {\n            os.width(6);\n            os << grade[i] << std::endl;\n        }\n        os.unsetf(std::ios::fixed);\n        os.precision(6);\n    } else {\n        os << "no data available" << std::endl;\n    }\n}\n\niPerson* CreatePerson() {\n    iPerson* p = nullptr;\n    int type, no, ng;\n    float grade[NG];\n    char name[NC+1];\n    bool repeat;\n\n    do {\n        std::cout << "Type (0,1,2) : ";\n        std::cin >> type;\n        std::cin.ignore();\n        repeat = false;\n        switch(type) {\n            case 0:\n                break;\n            case 1:\n                std::cout << "Name: ";\n                std::cin.getline(name, NC+1);\n                p = new Person(name);\n                break;\n            case 2:\n                std::cout << "Name: ";\n                std::cin.getline(name, NC+1);\n                std::cout << "Student Number : ";\n                std::cin >> no;\n                std::cout << "Number of Grades : ";\n                std::cin >> ng;\n                if (ng > NG) ng = NG;\n                for (int i = 0; i < ng; i++) {\n                    std::cout << "Grade " << i + 1 << " : ";\n                    std::cin >> grade[i];\n                    std::cin.ignore();\n                }\n                p = new Student(name, no, grade, ng);\n                break;\n            default:\n                repeat = true;\n                std::cout << "Invalid type. Try again\\n";\n        }\n    } while(repeat);\n\n    return p;\n}\n')),(0,r.kt)("p",null,"Multiple definitions would be unnecessary if the definitions of ",(0,r.kt)("inlineCode",{parentName:"p"},"display()")," were identical."),(0,r.kt)("h2",{id:"unit-tests-on-an-interface"},"Unit Tests on an Interface"),(0,r.kt)("p",null,"Good programming practice suggests that we code unit tests for an interface rather than a specific implementation. This practice requires that the interface does not change during the life cycle of the software. With a constant interface we can perform unit tests at every upgrade throughout an object's lifecycle without changing the test code."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("p",null,"To illustrate a unit test on the interface of a hierarchy, consider a module of ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," classes. The number of implementations changes throughout the life cycle."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," module contains all of the implemented algorithms. The interface and the tester module remain unchanged. With every upgrade to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," module, we execute the unit tester on the interface."),(0,r.kt)("h3",{id:"sorter-module"},"Sorter Module"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," class sorts in a different way. The interface to the hierarchy exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name()")," member functions of each class."),(0,r.kt)("p",null,"The header file for the interface contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Sorter Interface\n// iSorter.h\n\nclass iSorter {\npublic:\n    virtual void sort(float*, int) = 0;\n    virtual const char* name() const = 0;\n};\n\niSorter* CreateSorter(int);\nint noOfSorters();\n")),(0,r.kt)("p",null,"The header file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," concrete classes contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Sorter Concrete Classes\n// Sorter.h\n\n#include "iSorter.h"\n\nclass SelectionSorter : public iSorter {\npublic:\n    void sort(float*, int);\n    const char* name() const;\n};\n\nclass BubbleSorter : public iSorter {\npublic:\n    void sort(float*, int);\n    const char* name() const;\n};\n\niSorter* CreateSorter(int);\nint noOfSorters();\n')),(0,r.kt)("p",null,"The implementation file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sorter")," module defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name()")," member functions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectionSorter")," class and the ",(0,r.kt)("inlineCode",{parentName:"p"},"BubbleSorter")," class as well as the global ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateSorter()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"noOfSorters()")," functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Sorter Hierarchy - Implementation\n// Sorter.cpp\n\n#include "Sorter.h"\n\nvoid SelectionSorter::sort(float* a, int n) {\n    int i, j, max;\n    float temp;\n\n    for (i = 0; i < n - 1; i++) {\n        max = i;\n        for (j = i + 1; j < n; j++)\n            if (a[max] > a[j])\n                max = j;\n        temp = a[max];\n        a[max] = a[i];\n        a[i] = temp;\n    }\n}\n\nconst char* SelectionSorter::name() const {\n    return "Selection Sorter";\n}\n\nvoid BubbleSorter::sort(float* a, int n) {\n    int i, j;\n    float temp;\n\n    for (i = n - 1; i > 0; i--) {\n        for (j = 0; j < i; j++) {\n            if (a[j] > a[j+1]) {\n                temp = a[j];\n                a[j] = a[j+1];\n                a[j+1] = temp;\n            }\n        }\n    }\n}\n\nconst char* BubbleSorter::name() const {\n    return "Bubble Sorter";\n}\n\niSorter* CreateSorter(int i) {\n    iSorter* sorter = nullptr;\n    switch (i) {\n        case 0:\n            sorter = new SelectionSorter();\n            break;\n        case 1:\n            sorter = new BubbleSorter();\n            break;\n    }\n    return sorter;\n}\n\nint noOfSorters() {\n    return 2;\n}\n')),(0,r.kt)("h3",{id:"unit-tester"},"Unit Tester"),(0,r.kt)("p",null,"The unit tester generates the test data and reports the test results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Test Main for the iSorter Interface\n// Test_Main.cpp\n\n#include <iostream>\n#include <ctime>\n#include "iSorter.h"\n\nvoid populate(float* a, int n) {\n    srand(time(nullptr));\n    float f = 1.0f / RAND_MAX;\n    for (int i = 0; i < n; i++)\n        a[i] = rand() * f;\n}\n\nvoid test(iSorter* sorter, float* a, int n) {\n    sorter->sort(a, n);\n    bool sorted = true;\n    for (int i = 0; i < n - 1; i++)\n        if (a[i] > a[i+1]) sorted = false;\n    if (sorted)\n        std::cout << sorter->name()\n        << " is sorted" << std::endl;\n    else\n        std::cout << sorter->name()\n        << " is not sorted" << std::endl;\n}\n\nint main() {\n    int n;\n    std::cout << "Enter no of elements : ";\n    std::cin >> n;\n    float* array = new float[n];\n\n    for (int i = 0; i < noOfSorters(); i++) {\n        iSorter* sorter = CreateSorter(i);\n        populate(array, n);\n        test(sorter, array, n);\n        delete sorter;\n    }\n\n    delete [] array;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Enter no of elements : 200\nSelection Sorter is sorted\nBubble Sorter is sorted\n")),(0,r.kt)("p",null,"Note that we do not need to change this test code if we derive another class from the ",(0,r.kt)("inlineCode",{parentName:"p"},"iSorter")," interface."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A pure virtual function is a member function declaration without an implementation"),(0,r.kt)("li",{parentName:"ul"},"An abstract base class contains or inherits at least one pure virtual function"),(0,r.kt)("li",{parentName:"ul"},"An interface is an abstract base class with no data members"),(0,r.kt)("li",{parentName:"ul"},"Good programming practice performs unit tests on an interface rather than any specific implementation")))}u.isMDXComponent=!0},8806:function(e,n){n.Z="data:image/png;base64,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"},3370:function(e,n,t){n.Z=t.p+"assets/images/pure_virtual_function-0dccf8f1ebec7dd4f88108ca312f64f2.png"}}]);