var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .    The power set of a set is the set of all subsets of . We will make use of this notion in our very first definition ( ).   power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .    Lastly, we define the cartesian product of sets, which is a formal description of an ordered collection of objects.   Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.    The notion of a Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set .   tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.       "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .   "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .     "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.13",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.14",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.15",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "s_sets_functions.html#example-3",
  "type": "Example",
  "number": "0.1.18",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "s_sets_functions.html#example-4",
  "type": "Example",
  "number": "0.1.19",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.20",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.23",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "example-5",
  "level": "2",
  "url": "s_sets_functions.html#example-5",
  "type": "Example",
  "number": "0.1.24",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.25",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.26",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.27",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.28",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.     "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.    Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "s_logic.html#example-6",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "",
  "body": "  Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)   Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.  Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .    By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .   Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "s_proof_technique.html#warning-2",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "s_proof_technique.html#warning-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "warning-4",
  "level": "2",
  "url": "s_proof_technique.html#warning-4",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "p-132",
  "level": "2",
  "url": "s_proof_technique.html#p-132",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "p-133",
  "level": "2",
  "url": "s_proof_technique.html#p-133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "p-135",
  "level": "2",
  "url": "s_proof_technique.html#p-135",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "p-144",
  "level": "2",
  "url": "s_proof_technique.html#p-144",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_top_spaces",
  "level": "1",
  "url": "s_top_spaces.html",
  "type": "Section",
  "number": "1.1",
  "title": "Topological spaces",
  "body": " Topological spaces   The real numbers come equipped with a notion of nearness or closeness furnished by the absolute value function: namely, we define the distance between real numbers as . From this simple bit of structure springs all the fundamental concepts of real analysis: Cauchy sequences, limits, continuous functions, etc.  Topology can be seen as a vast generalization of this notion that abstracts away from the absolute value function, relying instead on the more abstract idea of open sets . Indeed, the notion of openness is introduced already in real analysis: a set is open if for all there is an such that if , then . Intuitively, you can think of this property as stating that has a certain roomy or generous nature: if , and is sufficiently close to , then has room for too. Come on in!  We view the the three conditions of as an attempt at axiomatizing this notion of openness (or roominess). This is the starting point of topology. The generality of this approach is part of topology's great power. We can define a notion of open sets on any set whatsoever: , we can choose a collection of subsets (called a topology ) that satisfies the axioms of . Furthermore, for a given set there are typically many distinct ways of making this choice; your topology on can be tailor-made to suit your particular needs. Beyond this generality and flexibility, the other key to topology's effectiveness is its ability to transport to any topological space the concepts of continuity, limits, connectedness, and compactness familiar to us from real analysis. Once a set is given the structure of a topological space, these notions can be used as powerful tools for investigating its properties. It is for this reason that topology plays an important role in essentially all mathematical fields: analysis, geometry, algebraic geometry, number theory, etc.    Topological space   A topological space is a pair , where is a set, and is a collection of subsets of satisfying the following axioms:   Trivial sets   and     Closed under arbitrary unions  Given any collection of elements , we have     Closed under finite intersections  If , then .   In this case we call a topology on , and an element is called an open set of . Although technically speaking a topological space is a pair , we often omit mention of the topology if there is no risk of confusion.     Equivalent alternative to axiom (3)   Using induction, we can show that if satisfies axiom (3) for any two elements of , then it satisfies it for any elements, for arbitrary. In other words if we replace axiom (3) with   (3')  If , then    , we get an equivalent definition of a toplogical space. When verifying whether a given is a topological space it may be more convenient to use axiom (3') as opposed to axiom (3).     Standard topology on   Let and define to be the set of open sets as defined above: that is, if and only if for all there is an such that the entire open interval is contained in . Show that is a topology on     We treat each axiom of in turn.   The empty set satisfies the defining property of trivially. Thus . For any , we have . Thus .    Assume for all , and let . We have . This shows satisfies the defining property of , and hence .    Assume , and let . We have . This shows that satisfies the defining property of , and hence that .        Trivial and discrete topology Let be a set.   The collection is a topology on , called the trivial topology . This is the topology on whose only open sets are the empty set and itself.    The collection is a topology on , called the discrete topology . This is the topology on for which every subset of is an open set.        Let . By definition the given contains and , and thus axiom (1) is satisfied. Since any union or intersection involving and is equal to either or , it is clear that is closed under arbitrary unions and finite intersections. Thus axioms (2)-(3) are satisfied.    Let . By definition, is the set of all subsets of . In particular, it contains and , and thus axioms (1) is satisfied. Furthermore, since any union or intersection of subsets of is again a subset of , we see that axioms (2)-(3) are satisfied.        Some small topological spaces   For each set describe all subsets that satisfy the axioms of , and hence make a topological space.    Empty set       Singleton       Doubleton           When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is . We showed that is always a topology on in . Thus is the unique choice of topology for . (Note: in this case the trivial and discrete topologies are equal.)    When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is , which again is none other than the discrete topology. We conclude that is the unique topology on . (Note: again in this case the trival and discrete topologies are equal.)    When , we have . By axiom (1) a topology must contain and . It follows that there are exactly four possibilities for based on whether the sets and are elements of : i.e., the only possibilities are . These are the four subsets of that satisfy axiom (1). It is now straightforward to show that each of these choices also satisfies axioms (2) and (3). Thus there are exactly 4 distinct topologies we can define on .       Cofinite topology  Let be a set. A subset is cofinite in if is finite. The collection of subsets is a topology, called the cofinite topology . In this topology a subset is open if and only if it is either empty or cofinite.   We treat each axiom separately.    We must show . That is specified explicitly in the definition of . Next since is finite, the set is cofinite in , and hence an element of .    Let be any collection of elements of : , for all we have or is cofinite in . Let . If for all , then . Otherwise there is an such that is nonempty, hence cofinite. We have . Since is finite, it follows that is finite. It follows that is cofinite, and hence an element of as desired.    Let , and let . We have . Since is either finite or equal to all of for , it is clear that is either finite or equal to . It follows that is either cofinite or empty, and hence an element of .       coarser topology  finer topology  comparable topologies  Comparable topologies   Two topologies on the set are comparable if or , and incomparable otherwise. If , we say that is coarser than , and that is finer than . When we say that is strictly coarser than and is strictly finer than .     Comparing trivial, discrete, cofinite topologies   Let be a set, and let be the trivial, discrete, and cofinite topologies on , respectively. Compare these topologies.    First observe that in general the trivial topology on is coarser than any other topology, since by definition a topology must contain and . Similarly the discrete topology is finer than any other topology, since by definition any topology is a subset of . Thus we always have . The question naturally arises, whether and\/or when these inclusions are strict. We consider a number of cases.   Case:  In this case or (a singleton), in which case it is easy to see that . (Note: when , we have .)    Case: finite, . Since is finite, it follows that all subsets of are cofinite, and hence that . Since , we have . It follows that in this case we have .    Case: infinite  Let be any finite nonempty subset of . Since is infinite and , it follows that must be infinite, and hence that is not cofinite. We conclude that and . Thus in this case. Next, fix in any element and let . It is clear (a) that is cofinite, and (b) that is not equal to or . Thus and , proving that . We conclude that in this case.     "
},
{
  "id": "d_topology",
  "level": "2",
  "url": "s_top_spaces.html#d_topology",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Topological space.",
  "body": " Topological space   A topological space is a pair , where is a set, and is a collection of subsets of satisfying the following axioms:   Trivial sets   and     Closed under arbitrary unions  Given any collection of elements , we have     Closed under finite intersections  If , then .   In this case we call a topology on , and an element is called an open set of . Although technically speaking a topological space is a pair , we often omit mention of the topology if there is no risk of confusion.   "
},
{
  "id": "rm_def_top",
  "level": "2",
  "url": "s_top_spaces.html#rm_def_top",
  "type": "Remark",
  "number": "1.1.2",
  "title": "Equivalent alternative to axiom (3).",
  "body": " Equivalent alternative to axiom (3)   Using induction, we can show that if satisfies axiom (3) for any two elements of , then it satisfies it for any elements, for arbitrary. In other words if we replace axiom (3) with   (3')  If , then    , we get an equivalent definition of a toplogical space. When verifying whether a given is a topological space it may be more convenient to use axiom (3') as opposed to axiom (3).   "
},
{
  "id": "top_eq_standard_R",
  "level": "2",
  "url": "s_top_spaces.html#top_eq_standard_R",
  "type": "Topological specimen",
  "number": "1",
  "title": "Standard topology on <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Standard topology on   Let and define to be the set of open sets as defined above: that is, if and only if for all there is an such that the entire open interval is contained in . Show that is a topology on     We treat each axiom of in turn.   The empty set satisfies the defining property of trivially. Thus . For any , we have . Thus .    Assume for all , and let . We have . This shows satisfies the defining property of , and hence .    Assume , and let . We have . This shows that satisfies the defining property of , and hence that .      "
},
{
  "id": "top_eg_trivial_discrete",
  "level": "2",
  "url": "s_top_spaces.html#top_eg_trivial_discrete",
  "type": "Topological specimen",
  "number": "2",
  "title": "Trivial and discrete topology.",
  "body": " Trivial and discrete topology Let be a set.   The collection is a topology on , called the trivial topology . This is the topology on whose only open sets are the empty set and itself.    The collection is a topology on , called the discrete topology . This is the topology on for which every subset of is an open set.        Let . By definition the given contains and , and thus axiom (1) is satisfied. Since any union or intersection involving and is equal to either or , it is clear that is closed under arbitrary unions and finite intersections. Thus axioms (2)-(3) are satisfied.    Let . By definition, is the set of all subsets of . In particular, it contains and , and thus axioms (1) is satisfied. Furthermore, since any union or intersection of subsets of is again a subset of , we see that axioms (2)-(3) are satisfied.      "
},
{
  "id": "example-13",
  "level": "2",
  "url": "s_top_spaces.html#example-13",
  "type": "Example",
  "number": "1.1.3",
  "title": "Some small topological spaces.",
  "body": " Some small topological spaces   For each set describe all subsets that satisfy the axioms of , and hence make a topological space.    Empty set       Singleton       Doubleton           When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is . We showed that is always a topology on in . Thus is the unique choice of topology for . (Note: in this case the trivial and discrete topologies are equal.)    When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is , which again is none other than the discrete topology. We conclude that is the unique topology on . (Note: again in this case the trival and discrete topologies are equal.)    When , we have . By axiom (1) a topology must contain and . It follows that there are exactly four possibilities for based on whether the sets and are elements of : i.e., the only possibilities are . These are the four subsets of that satisfy axiom (1). It is now straightforward to show that each of these choices also satisfies axioms (2) and (3). Thus there are exactly 4 distinct topologies we can define on .     "
},
{
  "id": "top_eg_cofinite",
  "level": "2",
  "url": "s_top_spaces.html#top_eg_cofinite",
  "type": "Topological specimen",
  "number": "3",
  "title": "Cofinite topology.",
  "body": " Cofinite topology  Let be a set. A subset is cofinite in if is finite. The collection of subsets is a topology, called the cofinite topology . In this topology a subset is open if and only if it is either empty or cofinite.   We treat each axiom separately.    We must show . That is specified explicitly in the definition of . Next since is finite, the set is cofinite in , and hence an element of .    Let be any collection of elements of : , for all we have or is cofinite in . Let . If for all , then . Otherwise there is an such that is nonempty, hence cofinite. We have . Since is finite, it follows that is finite. It follows that is cofinite, and hence an element of as desired.    Let , and let . We have . Since is either finite or equal to all of for , it is clear that is either finite or equal to . It follows that is either cofinite or empty, and hence an element of .     "
},
{
  "id": "d_comparable_topologies",
  "level": "2",
  "url": "s_top_spaces.html#d_comparable_topologies",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Comparable topologies.",
  "body": " coarser topology  finer topology  comparable topologies  Comparable topologies   Two topologies on the set are comparable if or , and incomparable otherwise. If , we say that is coarser than , and that is finer than . When we say that is strictly coarser than and is strictly finer than .   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "s_top_spaces.html#example-14",
  "type": "Example",
  "number": "1.1.5",
  "title": "Comparing trivial, discrete, cofinite topologies.",
  "body": " Comparing trivial, discrete, cofinite topologies   Let be a set, and let be the trivial, discrete, and cofinite topologies on , respectively. Compare these topologies.    First observe that in general the trivial topology on is coarser than any other topology, since by definition a topology must contain and . Similarly the discrete topology is finer than any other topology, since by definition any topology is a subset of . Thus we always have . The question naturally arises, whether and\/or when these inclusions are strict. We consider a number of cases.   Case:  In this case or (a singleton), in which case it is easy to see that . (Note: when , we have .)    Case: finite, . Since is finite, it follows that all subsets of are cofinite, and hence that . Since , we have . It follows that in this case we have .    Case: infinite  Let be any finite nonempty subset of . Since is infinite and , it follows that must be infinite, and hence that is not cofinite. We conclude that and . Thus in this case. Next, fix in any element and let . It is clear (a) that is cofinite, and (b) that is not equal to or . Thus and , proving that . We conclude that in this case.    "
},
{
  "id": "s_bases_top",
  "level": "1",
  "url": "s_bases_top.html",
  "type": "Section",
  "number": "1.2",
  "title": "Bases for topological spaces",
  "body": " Bases for topological spaces   When defining a topology for a set it is often convenient to specify instead a more manageable subset of that we can use to generate the entire topology using arbitrary unions and\/or finite intersections (our open set operators). A topological basis is a particularly nice example of this ( ) as the open sets of the topology it generates can be expressed as (arbitrary) unions of the basis elements. Bases will also provide a convenient way of comparing different topologies and (later on) determining whether relevant topological properties are satisfied by a given space.    Topological basis  Let be a set. A (topological) basis in is a collection of subsets of satisfying the following axioms:   Covers  For each there is a set such that .    Intersections covered by basis elements  If , then for all there is a such that .       Equivalent alternative to axiom (2)   Axiom (2) in is equivalent to saying that is equal to a union of elements of . In other words, we could replace (2) with the equivalent statement . This is a consequence of the more general fact expressed in .     Covering principle   Let be a collection of subsets of , and let . The following statements are equivalent.     for some sets . (In other words, is a union of elements of .)    For all there exists a set such that .       Implication:  Suppose for some sets . Given any we have for some . Since , we are done.    Implication:  By assumption, for all we can find a set such that . It follows that , showing that is a union of elements of .      Some bases for   Show that the given collections are bases in .                     It is clear that each collection of interval types covers in the sense of axiom (1). As for axiom (2), for each , , note that intersection of these types of intervals are either empty, or another interval of the same type. This is a result of the fact that , where the interval described on the right is understood to be the empty set if .     Topology generated by basis   Let be a basis in the set .    The set is a topology on .    We have the following alternate description of : .      Note: it is somewhat easier to show that is a topology using the description in statement (2), and then to show that the description in statement (1) is the same. (See Munkres for an approach like this.) I've decided to go the hard way since this is how I proceeded in class, and since it puts us through some useful set theory calisthenics!  First we show that as defined in (1) is a topology. We treat each axiom separately.    The empty set is the empty union of elements of ; thus . The covering axiom for bases implies that for all there is a such that . It follows that is a union of elements of , and thus that .    In plain English, a union of unions of elements of is a union of elements of . More rigorously, assume we have a collection of . By definition, for each we have , where for each . Thus , where is the set of all pairs of the form for and . Thus is a union of basis elements, and hence an element of .    It is enough to show that . (See .) Assume , , where for all . We have . Now by axiom (2') for bases (see ), each is a union of basis elements, and hence is an element . We have already shown that is closed under arbitrary unions. Thus is an element of .    This shows that , as defined in statement (1) of the theorem, is a topology. Statement (2) now follows from the general claim made in .     Topology generated by basis   Let be a basis in the set . The topology is called the topology generated by . Similarly, we call a basis for .     Comparing with bases   Let be a topology on generated by the basis .    Let be a topology on . We have .    Let be a topology on generated by the basis . We have .        Observe first that basis elements are open in the topology , essenitally by definition: , we have . The forward implication follows easily, since and implies .  Now consider the reverse implication . Assume . Given an open set we have for some by . Since for all (by assumption), and since is closed under arbitrary unions, we conclude . This proves , as desired.    This follows from and : the right-hand side of is simply an expansion of the right-hand side of , stating in more detail what it means for the basis element to be an element of the topology generated by .       A basis for the standard topology on   Show that the standard topology on  is topology generated by the basis in .    Let be the topology generated by and let be the standard topology on  . Since every open interval is open in each element of is an element of . By , we have . Next, assume ; then by definition for all there exists such that . It follows that , a union of elements of . Thus , by . This proves , and thus that , as desired.     Multiple bases for the standard real topology   Show that the bases from both generate the standard topology on .    Let be the topology generated by , . We must show that and . Clearly any is an element of , and hence an element of . It follows from that . Next, take any . Since the rational numbers are dense in , for any we can find satisfying . From it follows that .     Lower limit topology  The collection is called the lower limit basis , and the topology it generates is called the lower limit topology on . We denote the topological space as .    Lower limit is finer than standard   Show that the lower limit topology on is strictly finer than the standard one.    Let be the Euclidean and lower limit topologies, respectively. According to , to show we must show that for any basis element and any , there is a basis element satisfying . Since , we have , and thus we have , as desired.  To show is strictly finer than it suffices to find a basis element that cannot be written as a union of basis elements of . Consider the half-open interval . To show this is not a union of open intervals it is enough to show that for the element there is no open interval satisfying . This is clear since any interval containing must also contain negative numbers, and hence cannot be a subset of .     -topology  Let , and define . The collection is a basis in . The topology it generates is called the -topology on . We denote the topological space as .   We show that is a basis, treating each axiom separately.   Since by definition contains all finite open intervals, it clearly covers .    We claim that in fact given , their intersection is either empty or another element of . Axiom (2) follows directly from this claim.  Why is the claim true? An element of is either of the form or , where is an open interval. There are then three different cases describing intersections of two elements, as shown below. Here denote finite open intervals. . As we have already remarked, is either empty or a finite open interval . The claim now follows easily.        Comparing standard, lower limit, and -topology     Show that the -topology is strictly finer than the standard topology on .    Show that the lower limit topology and -topology are incomparable.      Let be the Euclidean, lower limit, and -topologies, respectively.    By definition, the basis for the -topology contains all finite open intervals. It follows from that . Next, using an argument similar to the one in , we show that the basis element cannot be covered by open intervals . Indeed, consider the element . Any open interval containing must contain an element of the form for some positive integer . Since , it follows that . We conclude that is not covered by open intervals .    This is left as an exercise.       Basis criterion   Let be a topology on the set . A subset is a basis of if and only if for all and there is an element such that .    We prove both implications of the given if and only if statement separately.   Case:  Assume is generated by . According to the description of in , for all and there is an element such that .    Case:  Assume for that for all and there is an element such that . Taking we see in particular that for all there is a such that . Thus satisfies axiom (1) for a basis. Next, let and take . Since are open, so is . Our assumption now implies that there is a such that . Thus axiom (2) of holds, and we condlude is a basis.      Bases for discrete topology   Let be a set, and let be the discrete topology on . Show the following:    is a basis for .    If is a basis for , then . In other words, is the minimal basis of the discrete topology.       This is left as an exercise.      "
},
{
  "id": "d_basis",
  "level": "2",
  "url": "s_bases_top.html#d_basis",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Topological basis.",
  "body": " Topological basis  Let be a set. A (topological) basis in is a collection of subsets of satisfying the following axioms:   Covers  For each there is a set such that .    Intersections covered by basis elements  If , then for all there is a such that .     "
},
{
  "id": "rm_alt_axiom2",
  "level": "2",
  "url": "s_bases_top.html#rm_alt_axiom2",
  "type": "Remark",
  "number": "1.2.2",
  "title": "Equivalent alternative to axiom (2).",
  "body": " Equivalent alternative to axiom (2)   Axiom (2) in is equivalent to saying that is equal to a union of elements of . In other words, we could replace (2) with the equivalent statement . This is a consequence of the more general fact expressed in .   "
},
{
  "id": "lemma_covering_principle",
  "level": "2",
  "url": "s_bases_top.html#lemma_covering_principle",
  "type": "Lemma",
  "number": "1.2.3",
  "title": "Covering principle.",
  "body": " Covering principle   Let be a collection of subsets of , and let . The following statements are equivalent.     for some sets . (In other words, is a union of elements of .)    For all there exists a set such that .       Implication:  Suppose for some sets . Given any we have for some . Since , we are done.    Implication:  By assumption, for all we can find a set such that . It follows that , showing that is a union of elements of .    "
},
{
  "id": "eg_basis_R",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_R",
  "type": "Example",
  "number": "1.2.4",
  "title": "Some bases for <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Some bases for   Show that the given collections are bases in .                     It is clear that each collection of interval types covers in the sense of axiom (1). As for axiom (2), for each , , note that intersection of these types of intervals are either empty, or another interval of the same type. This is a result of the fact that , where the interval described on the right is understood to be the empty set if .   "
},
{
  "id": "th_basis_generated",
  "level": "2",
  "url": "s_bases_top.html#th_basis_generated",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Topology generated by basis.",
  "body": " Topology generated by basis   Let be a basis in the set .    The set is a topology on .    We have the following alternate description of : .      Note: it is somewhat easier to show that is a topology using the description in statement (2), and then to show that the description in statement (1) is the same. (See Munkres for an approach like this.) I've decided to go the hard way since this is how I proceeded in class, and since it puts us through some useful set theory calisthenics!  First we show that as defined in (1) is a topology. We treat each axiom separately.    The empty set is the empty union of elements of ; thus . The covering axiom for bases implies that for all there is a such that . It follows that is a union of elements of , and thus that .    In plain English, a union of unions of elements of is a union of elements of . More rigorously, assume we have a collection of . By definition, for each we have , where for each . Thus , where is the set of all pairs of the form for and . Thus is a union of basis elements, and hence an element of .    It is enough to show that . (See .) Assume , , where for all . We have . Now by axiom (2') for bases (see ), each is a union of basis elements, and hence is an element . We have already shown that is closed under arbitrary unions. Thus is an element of .    This shows that , as defined in statement (1) of the theorem, is a topology. Statement (2) now follows from the general claim made in .   "
},
{
  "id": "d_basis_generated",
  "level": "2",
  "url": "s_bases_top.html#d_basis_generated",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Topology generated by basis.",
  "body": " Topology generated by basis   Let be a basis in the set . The topology is called the topology generated by . Similarly, we call a basis for .   "
},
{
  "id": "th_compare_basis",
  "level": "2",
  "url": "s_bases_top.html#th_compare_basis",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Comparing with bases.",
  "body": " Comparing with bases   Let be a topology on generated by the basis .    Let be a topology on . We have .    Let be a topology on generated by the basis . We have .        Observe first that basis elements are open in the topology , essenitally by definition: , we have . The forward implication follows easily, since and implies .  Now consider the reverse implication . Assume . Given an open set we have for some by . Since for all (by assumption), and since is closed under arbitrary unions, we conclude . This proves , as desired.    This follows from and : the right-hand side of is simply an expansion of the right-hand side of , stating in more detail what it means for the basis element to be an element of the topology generated by .     "
},
{
  "id": "eg_basis_standard_R",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_standard_R",
  "type": "Example",
  "number": "1.2.8",
  "title": "A basis for the standard topology on <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " A basis for the standard topology on   Show that the standard topology on  is topology generated by the basis in .    Let be the topology generated by and let be the standard topology on  . Since every open interval is open in each element of is an element of . By , we have . Next, assume ; then by definition for all there exists such that . It follows that , a union of elements of . Thus , by . This proves , and thus that , as desired.   "
},
{
  "id": "eg_multiple_bases_standard_R",
  "level": "2",
  "url": "s_bases_top.html#eg_multiple_bases_standard_R",
  "type": "Example",
  "number": "1.2.9",
  "title": "Multiple bases for the standard real topology.",
  "body": " Multiple bases for the standard real topology   Show that the bases from both generate the standard topology on .    Let be the topology generated by , . We must show that and . Clearly any is an element of , and hence an element of . It follows from that . Next, take any . Since the rational numbers are dense in , for any we can find satisfying . From it follows that .   "
},
{
  "id": "top_eg_lower_limit",
  "level": "2",
  "url": "s_bases_top.html#top_eg_lower_limit",
  "type": "Topological specimen",
  "number": "4",
  "title": "Lower limit topology.",
  "body": " Lower limit topology  The collection is called the lower limit basis , and the topology it generates is called the lower limit topology on . We denote the topological space as .  "
},
{
  "id": "eg_lower_limit_finer",
  "level": "2",
  "url": "s_bases_top.html#eg_lower_limit_finer",
  "type": "Example",
  "number": "1.2.10",
  "title": "Lower limit is finer than standard.",
  "body": " Lower limit is finer than standard   Show that the lower limit topology on is strictly finer than the standard one.    Let be the Euclidean and lower limit topologies, respectively. According to , to show we must show that for any basis element and any , there is a basis element satisfying . Since , we have , and thus we have , as desired.  To show is strictly finer than it suffices to find a basis element that cannot be written as a union of basis elements of . Consider the half-open interval . To show this is not a union of open intervals it is enough to show that for the element there is no open interval satisfying . This is clear since any interval containing must also contain negative numbers, and hence cannot be a subset of .   "
},
{
  "id": "top_eq_K_top",
  "level": "2",
  "url": "s_bases_top.html#top_eq_K_top",
  "type": "Topological specimen",
  "number": "5",
  "title": "<span class=\"process-math\">\\(K\\)<\/span>-topology.",
  "body": " -topology  Let , and define . The collection is a basis in . The topology it generates is called the -topology on . We denote the topological space as .   We show that is a basis, treating each axiom separately.   Since by definition contains all finite open intervals, it clearly covers .    We claim that in fact given , their intersection is either empty or another element of . Axiom (2) follows directly from this claim.  Why is the claim true? An element of is either of the form or , where is an open interval. There are then three different cases describing intersections of two elements, as shown below. Here denote finite open intervals. . As we have already remarked, is either empty or a finite open interval . The claim now follows easily.      "
},
{
  "id": "eg_Ktop_lower_stand",
  "level": "2",
  "url": "s_bases_top.html#eg_Ktop_lower_stand",
  "type": "Example",
  "number": "1.2.11",
  "title": "Comparing standard, lower limit, and <span class=\"process-math\">\\(K\\)<\/span>-topology.",
  "body": " Comparing standard, lower limit, and -topology     Show that the -topology is strictly finer than the standard topology on .    Show that the lower limit topology and -topology are incomparable.      Let be the Euclidean, lower limit, and -topologies, respectively.    By definition, the basis for the -topology contains all finite open intervals. It follows from that . Next, using an argument similar to the one in , we show that the basis element cannot be covered by open intervals . Indeed, consider the element . Any open interval containing must contain an element of the form for some positive integer . Since , it follows that . We conclude that is not covered by open intervals .    This is left as an exercise.     "
},
{
  "id": "th_basis_criterion",
  "level": "2",
  "url": "s_bases_top.html#th_basis_criterion",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "Basis criterion.",
  "body": " Basis criterion   Let be a topology on the set . A subset is a basis of if and only if for all and there is an element such that .    We prove both implications of the given if and only if statement separately.   Case:  Assume is generated by . According to the description of in , for all and there is an element such that .    Case:  Assume for that for all and there is an element such that . Taking we see in particular that for all there is a such that . Thus satisfies axiom (1) for a basis. Next, let and take . Since are open, so is . Our assumption now implies that there is a such that . Thus axiom (2) of holds, and we condlude is a basis.    "
},
{
  "id": "eg_basis_discrete",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_discrete",
  "type": "Example",
  "number": "1.2.13",
  "title": "Bases for discrete topology.",
  "body": " Bases for discrete topology   Let be a set, and let be the discrete topology on . Show the following:    is a basis for .    If is a basis for , then . In other words, is the minimal basis of the discrete topology.       This is left as an exercise.   "
},
{
  "id": "s_metric1",
  "level": "1",
  "url": "s_metric1.html",
  "type": "Section",
  "number": "1.3",
  "title": "Metric spaces",
  "body": " Metric spaces   In this section we introduce a special family of topological spaces: metric spaces . These types of spaces are pervasive throughout mathematics and are conceptually very familiar or intuitive. Indeed, historically metric spaces were the main inspiration to axiomatic topology; and the metric balls defined in were the inspiration for the notion of a topological basis. Lastly, the defining structure of metric space, a metric  , gives us a quantitative grip on the topology, wheareas generally in topology we must rely on the qualitative description of open sets given by the axioms.    Metric space  A metric space is a pair , where is a set and is a function satisfying the following axioms:   Positivity   , and if and only if , for all .    Symmetry   for all .    Triangle inequality   for all .   The function is called a metric or a distance function on , and for any we call the distance between  and .    metric Euclidean  metric box  metric taxicab  Euclidean, box, and taxicab metrics   Let , where is a positive integer. Let .   Euclidean metric  The function defined as is a metric, called the Euclidean metric . The metric space is called Euclidean -space . The norm of , denoted , is defined as .    Box metric  The function defined as is a metric, called the box metric (or square metric ).    Taxicab metric  The function defined as is a metric, called the taxicab metric .          It is easiest to prove that the Euclidean metric is indeed a metric by first expressing it in terms of the dot product as and then using well-known properties of the dot product, including the Cauchy-Schwarz inequality.    Let be the box metric. It is clear that for all . Furthermore, we have . This proves positivity. The symmetry follows easily from the fact that . As for the triangle inequality, for all we have , where the leftmost inequality is the triangle inequality for the absolute value, and the rightmost inequality follows from the definition of . Since the inequality holds for all , we conclude that .    This is a homework exercise.        Metric balls   Let be a metric space. Given and the -ball centered at is the subset defined as . In other words, is the set of all elements of lying within a distance of of . We call the radius of . More generally, we call a subset a -metric ball if for some and . When it is clear what the underlying metric is, we will omit and speak simply of metric balls.     Metric balls for Euclidean and box metrics   Describe the metric balls for the Euclidean and box metrics on for .    For the two metrics are just , the same one we used to define the standard topology on . Epsilon balls here are just intervals of the form .  For the Euclidean distance defined is the standard distance between two points in or . The set of points satisfying is thus the circle of radius centered at for , and the sphere of radius centered at for . It follows that an -ball is the interior of the this circle or sphere, respectively.  True to its name, an -ball around is the open -cube . (Note that the product here is the Cartesian product of these intervals. (See .)) Indeed, we have .     Metric balls   Let be a metric ball in the metric space . If , there is a such that . In other words, for all elements of a metric ball , we can find a metric ball centered at contained in .    Since , we have and hence . We claim that . Indeed, we have . It follows that , proving .     Metric spaces  Let be a metric space. The set of all metric balls is a topological basis, giving the structure of a topological space. We say the topology generated by the topology is induced by the metric .  With respect to this topology we have .   We must prove (1) that is a basis, and (2) that the description of openness in ( ) is correct. (The description in ( ) follows directly from ( ).)    For all , we have , proving the first axiom of . Next, let be two metric balls. Given , there are such that for . Setting , we have . This proves the second axiom.    Using the alternate description ( of the topology generated by a basis we have .       Comparing metric topologies   Let be two metrics on the set , and let be the topologies they induce.   We have if and only if every -metric ball is a union of -metric balls.    We have if and only if every -metric ball is a union of -metric balls and every -metric ball is a union of -metric balls.       Both statements follow directly from .     Equivalence of Euclidean, box, and taxicab metrics   Let . Show that the Euclidean, box, and taxicab metrics all induce the same topology on .    We adjust our notation to accommodate for different metrics at play simultaneously. Let , , be the three metrics in question, and let , , be their respective topologies. We will denote -balls with respect to each as , , .  We will show and , from whence it follows that .   Case:  For any nonnegative numbers we have . From this it follows that for any and any we have , showing that within any Euclidean metric ball centered at we can find a box metric ball centered at , and vice versa. Now given any element in a Euclidean metric ball , there is a Euclidean metric ball centered at contained in by . By there is box metric ball centered at satisfying . Using our covering principle , we conclude that any Euclidean metric ball is covered by box metric balls, and thus . A very similar argument, using the other inclusion of , shows that .    Case:  For any nonnegative we have , from whence it follows that for any and we have . An argument exactly like the one from the previous case now shows .       Given a set the function defined as is a metric on , called the trivial metric .    The proof that is a metric is left as an exercise.     Trivial metric   Determine the topology induced on a set by the trivial metric.    This example is left as an exercise.     -adic metric   Let be the set of integers. Let be the set of prime integers. The fundamental theorem of arithmetic states that any nonzero integer can be factored in unique was as a product of primes in the form , where is a nonnegative integer, and for all but finitely many primes . We call the valuation of at the prime ; it tells us the highest power of dividing .  Now fix a prime integer . For we define its -adic norm  as . The function defined as is a metric on , called the -adic metric. Integers are close to one another with respect to this metric if their difference is highly divisible by .    We content ourselves with a proof sketch in order to avoid getting into the weeds of elementary number theory. The positivity and symmetry axioms follow readily from simple properties of divisibility. For the triangle inequality it is enough to prove that the -adic norm satisfies the triangle inequality on : , for all we have since then for any we have . Lastly, the inequality follows from the stronger claim , which itself follows from divisibility properties.    "
},
{
  "id": "d_metric_space",
  "level": "2",
  "url": "s_metric1.html#d_metric_space",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Metric space.",
  "body": " Metric space  A metric space is a pair , where is a set and is a function satisfying the following axioms:   Positivity   , and if and only if , for all .    Symmetry   for all .    Triangle inequality   for all .   The function is called a metric or a distance function on , and for any we call the distance between  and .  "
},
{
  "id": "d_Euclidean_box_metric",
  "level": "2",
  "url": "s_metric1.html#d_Euclidean_box_metric",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Euclidean, box, and taxicab metrics.",
  "body": " metric Euclidean  metric box  metric taxicab  Euclidean, box, and taxicab metrics   Let , where is a positive integer. Let .   Euclidean metric  The function defined as is a metric, called the Euclidean metric . The metric space is called Euclidean -space . The norm of , denoted , is defined as .    Box metric  The function defined as is a metric, called the box metric (or square metric ).    Taxicab metric  The function defined as is a metric, called the taxicab metric .          It is easiest to prove that the Euclidean metric is indeed a metric by first expressing it in terms of the dot product as and then using well-known properties of the dot product, including the Cauchy-Schwarz inequality.    Let be the box metric. It is clear that for all . Furthermore, we have . This proves positivity. The symmetry follows easily from the fact that . As for the triangle inequality, for all we have , where the leftmost inequality is the triangle inequality for the absolute value, and the rightmost inequality follows from the definition of . Since the inequality holds for all , we conclude that .    This is a homework exercise.      "
},
{
  "id": "d_epsilon_balls",
  "level": "2",
  "url": "s_metric1.html#d_epsilon_balls",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Metric balls.",
  "body": " Metric balls   Let be a metric space. Given and the -ball centered at is the subset defined as . In other words, is the set of all elements of lying within a distance of of . We call the radius of . More generally, we call a subset a -metric ball if for some and . When it is clear what the underlying metric is, we will omit and speak simply of metric balls.   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "s_metric1.html#example-21",
  "type": "Example",
  "number": "1.3.4",
  "title": "Metric balls for Euclidean and box metrics.",
  "body": " Metric balls for Euclidean and box metrics   Describe the metric balls for the Euclidean and box metrics on for .    For the two metrics are just , the same one we used to define the standard topology on . Epsilon balls here are just intervals of the form .  For the Euclidean distance defined is the standard distance between two points in or . The set of points satisfying is thus the circle of radius centered at for , and the sphere of radius centered at for . It follows that an -ball is the interior of the this circle or sphere, respectively.  True to its name, an -ball around is the open -cube . (Note that the product here is the Cartesian product of these intervals. (See .)) Indeed, we have .   "
},
{
  "id": "lemma_metric",
  "level": "2",
  "url": "s_metric1.html#lemma_metric",
  "type": "Lemma",
  "number": "1.3.5",
  "title": "Metric balls.",
  "body": " Metric balls   Let be a metric ball in the metric space . If , there is a such that . In other words, for all elements of a metric ball , we can find a metric ball centered at contained in .    Since , we have and hence . We claim that . Indeed, we have . It follows that , proving .   "
},
{
  "id": "top_eg_metric_spaces",
  "level": "2",
  "url": "s_metric1.html#top_eg_metric_spaces",
  "type": "Topological specimen",
  "number": "6",
  "title": "Metric spaces.",
  "body": " Metric spaces  Let be a metric space. The set of all metric balls is a topological basis, giving the structure of a topological space. We say the topology generated by the topology is induced by the metric .  With respect to this topology we have .   We must prove (1) that is a basis, and (2) that the description of openness in ( ) is correct. (The description in ( ) follows directly from ( ).)    For all , we have , proving the first axiom of . Next, let be two metric balls. Given , there are such that for . Setting , we have . This proves the second axiom.    Using the alternate description ( of the topology generated by a basis we have .     "
},
{
  "id": "th_compare_metrics",
  "level": "2",
  "url": "s_metric1.html#th_compare_metrics",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Comparing metric topologies.",
  "body": " Comparing metric topologies   Let be two metrics on the set , and let be the topologies they induce.   We have if and only if every -metric ball is a union of -metric balls.    We have if and only if every -metric ball is a union of -metric balls and every -metric ball is a union of -metric balls.       Both statements follow directly from .   "
},
{
  "id": "eg_euc_box_taxi_equivalence",
  "level": "2",
  "url": "s_metric1.html#eg_euc_box_taxi_equivalence",
  "type": "Example",
  "number": "1.3.7",
  "title": "Equivalence of Euclidean, box, and taxicab metrics.",
  "body": " Equivalence of Euclidean, box, and taxicab metrics   Let . Show that the Euclidean, box, and taxicab metrics all induce the same topology on .    We adjust our notation to accommodate for different metrics at play simultaneously. Let , , be the three metrics in question, and let , , be their respective topologies. We will denote -balls with respect to each as , , .  We will show and , from whence it follows that .   Case:  For any nonnegative numbers we have . From this it follows that for any and any we have , showing that within any Euclidean metric ball centered at we can find a box metric ball centered at , and vice versa. Now given any element in a Euclidean metric ball , there is a Euclidean metric ball centered at contained in by . By there is box metric ball centered at satisfying . Using our covering principle , we conclude that any Euclidean metric ball is covered by box metric balls, and thus . A very similar argument, using the other inclusion of , shows that .    Case:  For any nonnegative we have , from whence it follows that for any and we have . An argument exactly like the one from the previous case now shows .    "
},
{
  "id": "d_trivial_metric",
  "level": "2",
  "url": "s_metric1.html#d_trivial_metric",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Given a set the function defined as is a metric on , called the trivial metric .    The proof that is a metric is left as an exercise.   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "s_metric1.html#example-23",
  "type": "Example",
  "number": "1.3.9",
  "title": "Trivial metric.",
  "body": " Trivial metric   Determine the topology induced on a set by the trivial metric.    This example is left as an exercise.   "
},
{
  "id": "d_padic_metric",
  "level": "2",
  "url": "s_metric1.html#d_padic_metric",
  "type": "Definition",
  "number": "1.3.10",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-adic metric.",
  "body": " -adic metric   Let be the set of integers. Let be the set of prime integers. The fundamental theorem of arithmetic states that any nonzero integer can be factored in unique was as a product of primes in the form , where is a nonnegative integer, and for all but finitely many primes . We call the valuation of at the prime ; it tells us the highest power of dividing .  Now fix a prime integer . For we define its -adic norm  as . The function defined as is a metric on , called the -adic metric. Integers are close to one another with respect to this metric if their difference is highly divisible by .    We content ourselves with a proof sketch in order to avoid getting into the weeds of elementary number theory. The positivity and symmetry axioms follow readily from simple properties of divisibility. For the triangle inequality it is enough to prove that the -adic norm satisfies the triangle inequality on : , for all we have since then for any we have . Lastly, the inequality follows from the stronger claim , which itself follows from divisibility properties.   "
},
{
  "id": "s_closed_closure_interior",
  "level": "1",
  "url": "s_closed_closure_interior.html",
  "type": "Section",
  "number": "1.4",
  "title": "Closed sets, closure, and interior",
  "body": " Closed sets, closure, and interior       Closed sets   Let be a topological space. A subset is closed if its complement is open. Equivalently, a subset is closed if and only if for some open set .     Property of closed sets   Let be a topological space.    Trivial sets  Both and are closed sets.    Finite unions  If are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.      Statement (1) follows from the observation that , and .  Assume is closed for ; then by DeMorgan's law , which is open since is open for all and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By DeMorgan's law we have , which is open since is open and arbitrary unions of open sets are open.     Closed sets determine topology  In general, given a set the set complement operation is defines a bijection , that is self-inverse: , we have for all subsets . It follows from the that the closed sets of are in bijective correspondence with the open sets, and thus that a topology on is uniquely determined by specifying any collection of sets satisfying (1)-(3) from . In other words, a topology is determined by specifying either its open sets or its closed sets.    Closed in trivial and discrete topologies     If has the trivial topology, then the only open sets of are . Hence the only closed sets are and .    If has the discrete topology, then every subset of is open. It follows that any subset of is closed, since its complement is open. We conclude that al subsets of are both open and closed in the discrete topology.       Closed in the cofinite topology   Let be a set endowed with the cofinite topology. An set is open in if and only if (a) or (b) is finite. It follows that a set is closed if and only if (a) or (b) for a cofinite set if and only if (a) or (b) is finite.     Basis description of closed sets   Let be a topological space with basis . A set is closed if and only if for all , there is a basis element satisfying .    By definition a set is closed if and only if its complement is open. Using , we see that is open if and only if for all there is a basis element satisfying .     Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                  The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .       Interior and closure of a set   Let be a subset of the topological space .    Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .       Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .     is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .      Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.     Using smallest\/largest characterization of interior\/closure  Statements (1)-(2) of provide a potentially useful indirect way of computing the interior or closure of a set .   Interior  Find an open set contained in and show that for any other open set we have . It follows that .    Closure  Find a closed set containing and show that for any other closed set containing we have . It follows that .       Interior and closure of   Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .      First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .       Interior and closure in cofinite topology   Let be a set endowed with the cofinite topology. For describe and . Use cases.        "
},
{
  "id": "d_closed_set",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_closed_set",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Closed sets.",
  "body": " Closed sets   Let be a topological space. A subset is closed if its complement is open. Equivalently, a subset is closed if and only if for some open set .   "
},
{
  "id": "th_closed_props",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_closed_props",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "Property of closed sets.",
  "body": " Property of closed sets   Let be a topological space.    Trivial sets  Both and are closed sets.    Finite unions  If are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.      Statement (1) follows from the observation that , and .  Assume is closed for ; then by DeMorgan's law , which is open since is open for all and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By DeMorgan's law we have , which is open since is open and arbitrary unions of open sets are open.   "
},
{
  "id": "rm_equiv_open_closed",
  "level": "2",
  "url": "s_closed_closure_interior.html#rm_equiv_open_closed",
  "type": "Remark",
  "number": "1.4.3",
  "title": "Closed sets determine topology.",
  "body": " Closed sets determine topology  In general, given a set the set complement operation is defines a bijection , that is self-inverse: , we have for all subsets . It follows from the that the closed sets of are in bijective correspondence with the open sets, and thus that a topology on is uniquely determined by specifying any collection of sets satisfying (1)-(3) from . In other words, a topology is determined by specifying either its open sets or its closed sets.  "
},
{
  "id": "eg_closed_trivial_discrete",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closed_trivial_discrete",
  "type": "Example",
  "number": "1.4.4",
  "title": "Closed in trivial and discrete topologies.",
  "body": " Closed in trivial and discrete topologies     If has the trivial topology, then the only open sets of are . Hence the only closed sets are and .    If has the discrete topology, then every subset of is open. It follows that any subset of is closed, since its complement is open. We conclude that al subsets of are both open and closed in the discrete topology.     "
},
{
  "id": "eg_closed_cofinite",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closed_cofinite",
  "type": "Example",
  "number": "1.4.5",
  "title": "Closed in the cofinite topology.",
  "body": " Closed in the cofinite topology   Let be a set endowed with the cofinite topology. An set is open in if and only if (a) or (b) is finite. It follows that a set is closed if and only if (a) or (b) for a cofinite set if and only if (a) or (b) is finite.   "
},
{
  "id": "lemma_basis_closed",
  "level": "2",
  "url": "s_closed_closure_interior.html#lemma_basis_closed",
  "type": "Lemma",
  "number": "1.4.6",
  "title": "Basis description of closed sets.",
  "body": " Basis description of closed sets   Let be a topological space with basis . A set is closed if and only if for all , there is a basis element satisfying .    By definition a set is closed if and only if its complement is open. Using , we see that is open if and only if for all there is a basis element satisfying .   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "s_closed_closure_interior.html#example-26",
  "type": "Example",
  "number": "1.4.7",
  "title": "Closed sets in Euclidean metric topology.",
  "body": " Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                  The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .     "
},
{
  "id": "d_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_interior_closure",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Interior and closure of a set.",
  "body": " Interior and closure of a set   Let be a subset of the topological space .    Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .     "
},
{
  "id": "th_equivalent_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_equivalent_interior_closure",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Equivalent notions of interior and closure.",
  "body": " Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .     is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .      Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.   "
},
{
  "id": "rm_",
  "level": "2",
  "url": "s_closed_closure_interior.html#rm_",
  "type": "Remark",
  "number": "1.4.10",
  "title": "Using smallest\/largest characterization of interior\/closure.",
  "body": " Using smallest\/largest characterization of interior\/closure  Statements (1)-(2) of provide a potentially useful indirect way of computing the interior or closure of a set .   Interior  Find an open set contained in and show that for any other open set we have . It follows that .    Closure  Find a closed set containing and show that for any other closed set containing we have . It follows that .     "
},
{
  "id": "eg_closure_interior_K",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closure_interior_K",
  "type": "Example",
  "number": "1.4.11",
  "title": "Interior and closure of <span class=\"process-math\">\\(K\\)<\/span>.",
  "body": " Interior and closure of   Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .      First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .     "
},
{
  "id": "example-28",
  "level": "2",
  "url": "s_closed_closure_interior.html#example-28",
  "type": "Example",
  "number": "1.4.12",
  "title": "Interior and closure in cofinite topology.",
  "body": " Interior and closure in cofinite topology   Let be a set endowed with the cofinite topology. For describe and . Use cases.       "
},
{
  "id": "s_limitpoints_hausdorff",
  "level": "1",
  "url": "s_limitpoints_hausdorff.html",
  "type": "Section",
  "number": "1.5",
  "title": "Limit points and the Hausdorff property",
  "body": " Limit points and the Hausdorff property       Neighborhood of element or set   Let be a topological space. An open neighborhood of an element is an open set that contains ; an open neighborhood of a subset is an open set such that .  More generally, a (not necessarily open) neighborhood of a point or subset is a subset whose interior contains or : equivalently, contains an open set containing or .     Limit point of a set   Let be a subset of the topological space . An element is a limit point of if any open neighborhood of intersects in a point distinct from : for any open neighborhood of , we have .     Limit points in   Let with the standard topology. Determine the set of all limit points for the following sets.                               Limit points and closure   Let be a subset of the topological space , and let be the set of all limit points of . We have .     Closed, closure, limit points   Let be a subset of the topological space . The following are equivalent.     is closed.     contains all of its limit points.     .       Hausdorff property   A topological space is Hausdorff if for any two distinct elements ( , ) there are open neighborhoods of and , respectively, that are disjoint ( , ).     Hausdorff properties   Let be a Hausdorff space.    All singletons are closed.    All finite subsets of are closed.       The -axiom   A topological space is (or is a -space , or satisfies the -axiom ) if all finite subsets of are closed.     as separation axiom  The is called a separation axiom , or Trennungsaxiom in German: hence the T . To see more explicitly why this is called a separation axiom, note that (a) is equivalent to the property that any singleton is closed, and (b) this in turn is equivalent to saying for any two elements there is an open neighborhood of that does not contain ; we think of this as separating and .  We will say more about separation axioms later. For now, I'll mention that the Hausdorff property is itself a separation axiom, called the -axiom.    Hausdorff versus   Let be a topological space.    If is Hausdorff, then is     It is not the case that if is , then must be Hausdorff.    Using logical shorthand, we have     Statement (1) follows from .  We provide a counterexample to the claim that implies Hausdorff. Let be any infinite set endowed with the cofinite topology. The closed sets of are precisely the finite sets and itself, as we saw in . Thus is . On the other hand, is not Hausdorff. Indeed take any two distinct elements . Let and be any pair of open neighborhoods of and , respectively. We will show that . If either of the open neighborhoods is equal to itself, the claim is obvious. Otherwise is a finite set that does not contain and is a finite set that does not contain . Since is infinite, , and hence , as desired.     Metric spaces are Hausdorff     Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.           Convergent sequence   Let be a topological space. A sequence of elements of  converges to the element , denoted , if for any open neighborhood of , there is a positive integer such that for all . We say is a convergent sequence in this case, and call the limit of the sequence.     Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!         Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.         Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.    "
},
{
  "id": "d_neighborhood",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_neighborhood",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Neighborhood of element or set.",
  "body": " Neighborhood of element or set   Let be a topological space. An open neighborhood of an element is an open set that contains ; an open neighborhood of a subset is an open set such that .  More generally, a (not necessarily open) neighborhood of a point or subset is a subset whose interior contains or : equivalently, contains an open set containing or .   "
},
{
  "id": "d_limit_point",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_limit_point",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Limit point of a set.",
  "body": " Limit point of a set   Let be a subset of the topological space . An element is a limit point of if any open neighborhood of intersects in a point distinct from : for any open neighborhood of , we have .   "
},
{
  "id": "eg_limit_points",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_limit_points",
  "type": "Example",
  "number": "1.5.3",
  "title": "Limit points in <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Limit points in   Let with the standard topology. Determine the set of all limit points for the following sets.                             "
},
{
  "id": "th_limits_points_closure",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_limits_points_closure",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "Limit points and closure.",
  "body": " Limit points and closure   Let be a subset of the topological space , and let be the set of all limit points of . We have .   "
},
{
  "id": "cor_closed",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#cor_closed",
  "type": "Corollary",
  "number": "1.5.5",
  "title": "Closed, closure, limit points.",
  "body": " Closed, closure, limit points   Let be a subset of the topological space . The following are equivalent.     is closed.     contains all of its limit points.     .     "
},
{
  "id": "d_Hausdorff",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_Hausdorff",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Hausdorff property.",
  "body": " Hausdorff property   A topological space is Hausdorff if for any two distinct elements ( , ) there are open neighborhoods of and , respectively, that are disjoint ( , ).   "
},
{
  "id": "th_Hausdorff_props",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_Hausdorff_props",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "Hausdorff properties.",
  "body": " Hausdorff properties   Let be a Hausdorff space.    All singletons are closed.    All finite subsets of are closed.     "
},
{
  "id": "d_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_T1",
  "type": "Definition",
  "number": "1.5.8",
  "title": "The <span class=\"process-math\">\\(T_1\\)<\/span>-axiom.",
  "body": " The -axiom   A topological space is (or is a -space , or satisfies the -axiom ) if all finite subsets of are closed.   "
},
{
  "id": "rm_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#rm_T1",
  "type": "Remark",
  "number": "1.5.9",
  "title": "<span class=\"process-math\">\\(T_1\\)<\/span> as separation axiom.",
  "body": " as separation axiom  The is called a separation axiom , or Trennungsaxiom in German: hence the T . To see more explicitly why this is called a separation axiom, note that (a) is equivalent to the property that any singleton is closed, and (b) this in turn is equivalent to saying for any two elements there is an open neighborhood of that does not contain ; we think of this as separating and .  We will say more about separation axioms later. For now, I'll mention that the Hausdorff property is itself a separation axiom, called the -axiom.  "
},
{
  "id": "cor_Hausdorff_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#cor_Hausdorff_T1",
  "type": "Corollary",
  "number": "1.5.10",
  "title": "Hausdorff versus <span class=\"process-math\">\\(T_1\\)<\/span>.",
  "body": " Hausdorff versus   Let be a topological space.    If is Hausdorff, then is     It is not the case that if is , then must be Hausdorff.    Using logical shorthand, we have     Statement (1) follows from .  We provide a counterexample to the claim that implies Hausdorff. Let be any infinite set endowed with the cofinite topology. The closed sets of are precisely the finite sets and itself, as we saw in . Thus is . On the other hand, is not Hausdorff. Indeed take any two distinct elements . Let and be any pair of open neighborhoods of and , respectively. We will show that . If either of the open neighborhoods is equal to itself, the claim is obvious. Otherwise is a finite set that does not contain and is a finite set that does not contain . Since is infinite, , and hence , as desired.   "
},
{
  "id": "eg_metric_implies_Hausdorff",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_metric_implies_Hausdorff",
  "type": "Example",
  "number": "1.5.11",
  "title": "Metric spaces are Hausdorff.",
  "body": " Metric spaces are Hausdorff     Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.         "
},
{
  "id": "d_convergent_sequence",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_convergent_sequence",
  "type": "Definition",
  "number": "1.5.12",
  "title": "Convergent sequence.",
  "body": " Convergent sequence   Let be a topological space. A sequence of elements of  converges to the element , denoted , if for any open neighborhood of , there is a positive integer such that for all . We say is a convergent sequence in this case, and call the limit of the sequence.   "
},
{
  "id": "eg_cofinite_convergent_sequence",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_cofinite_convergent_sequence",
  "type": "Example",
  "number": "1.5.13",
  "title": "Limits in the cofinite topology.",
  "body": " Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!       "
},
{
  "id": "th_Hausdorff_unique_limits",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_Hausdorff_unique_limits",
  "type": "Theorem",
  "number": "1.5.14",
  "title": "Unique limits in Hausdorff spaces.",
  "body": " Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.       "
},
{
  "id": "th_T1_limitpoints",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_T1_limitpoints",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Limit points in <span class=\"process-math\">\\(T_1\\)<\/span>-spaces.",
  "body": " Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.   "
},
{
  "id": "s_subspace_finite_products",
  "level": "1",
  "url": "s_subspace_finite_products.html",
  "type": "Section",
  "number": "1.6",
  "title": "Subspaces and products",
  "body": " Subspaces and products    Subspaces and product spaces are constructions that allow us to build new topological spaces from existing ones.    Subspaces   Subspace  Given a topological space and a subset the set defined as defines a topology on called the subspace topology . We call , together with the topology , a subspace of .   We show that the collection is a topology on .  Axiom (1). Since , we have and .  Axiom (2). Let be a collection of elements of . By definition we have for open sets . It follows that , since is open in .  Axiom (3). Given elements , we have .     Subspace properties   Let be a subspace of .    If is a basis of , then the set is a basis for .     is closed in if and only if for some that is closed in .    If is (resp. Hausdorff, resp. metrizable), then is (resp., Hausdorff, resp. metrizable).         Axiom 1. For any we have for some , and thus .  Axiom 2. Given two elements , and , there is a basis element satisfying . It follows that and .    Let . We have .    Assume is . Given , the set is closed in . From the previous result it follows that is closed in . Thus is .  Assume is Hausdorff. Given there are disjoint open (in ) neighborhoods of , respectively. The sets are then open disjoint neighborhoods of in the subspace topology of .        Open\/closed depends on topology   Let be a subspace of . Prove:     Consider as a subspace of with the standard topology. The set it self is both open and closed in the subspace , but is neither open nor closed in .     Openness\/closedness transitivity   Let be a subspace of .    If is open in and is open in , then is open in .    If is closed in and is closed in , then is closed in         If is open in , then for some open set of . Since is open in , we have is open in .    The proof is obtained from the previous argument by replacing all instances of open with closed , using (2) of .        Finite product spaces   Finite products  Let be topological spaces, and let . The collection is a basis on . The topology generated by is the product topology on , and is called the product of the spaces .   We show that is a basis.  Axiom 1. Given , we have .  Let and . Given , we have for all , and hence .     Product basis not a topology necessarily   Let with the standard topology, and let with the product topology.   Describe the open sets of qualitatively. Give an example demonstrating that the product basis is not a topology in this case.    Show that the product topology on is equal to the the Euclidean topology.       Firstly, as we will show in more generality in , the set forms a basis for the product topology on . Graphically, these basis elements are just open rectangles in the plane.    An open set in the product topology on is anything that can be written as a union of open rectangles, by the remark made above. To see that the product basis is not in general a topology, consider , where and . We claim that not only is not a product of open sets, it is in fact not the product of any sets. Indeed, if for two sets , then we would have to have , in which case . This is a contradiction since .    Using the remark above, it is enough to show that open cirlces (basis elements in the standard topology) can be written as unions of open rectangles (basis elements in the product topology) and vice versa. This is clear.       "
},
{
  "id": "top_eg_subspace",
  "level": "2",
  "url": "s_subspace_finite_products.html#top_eg_subspace",
  "type": "Topological specimen",
  "number": "7",
  "title": "Subspace.",
  "body": " Subspace  Given a topological space and a subset the set defined as defines a topology on called the subspace topology . We call , together with the topology , a subspace of .   We show that the collection is a topology on .  Axiom (1). Since , we have and .  Axiom (2). Let be a collection of elements of . By definition we have for open sets . It follows that , since is open in .  Axiom (3). Given elements , we have .   "
},
{
  "id": "th_subspace_props",
  "level": "2",
  "url": "s_subspace_finite_products.html#th_subspace_props",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Subspace properties.",
  "body": " Subspace properties   Let be a subspace of .    If is a basis of , then the set is a basis for .     is closed in if and only if for some that is closed in .    If is (resp. Hausdorff, resp. metrizable), then is (resp., Hausdorff, resp. metrizable).         Axiom 1. For any we have for some , and thus .  Axiom 2. Given two elements , and , there is a basis element satisfying . It follows that and .    Let . We have .    Assume is . Given , the set is closed in . From the previous result it follows that is closed in . Thus is .  Assume is Hausdorff. Given there are disjoint open (in ) neighborhoods of , respectively. The sets are then open disjoint neighborhoods of in the subspace topology of .      "
},
{
  "id": "eg_relative_openness",
  "level": "2",
  "url": "s_subspace_finite_products.html#eg_relative_openness",
  "type": "Example",
  "number": "1.6.2",
  "title": "Open\/closed depends on topology.",
  "body": " Open\/closed depends on topology   Let be a subspace of . Prove:     Consider as a subspace of with the standard topology. The set it self is both open and closed in the subspace , but is neither open nor closed in .   "
},
{
  "id": "th_transitivity_open_closed",
  "level": "2",
  "url": "s_subspace_finite_products.html#th_transitivity_open_closed",
  "type": "Theorem",
  "number": "1.6.3",
  "title": "Openness\/closedness transitivity.",
  "body": " Openness\/closedness transitivity   Let be a subspace of .    If is open in and is open in , then is open in .    If is closed in and is closed in , then is closed in         If is open in , then for some open set of . Since is open in , we have is open in .    The proof is obtained from the previous argument by replacing all instances of open with closed , using (2) of .     "
},
{
  "id": "top_eg_finite_product",
  "level": "2",
  "url": "s_subspace_finite_products.html#top_eg_finite_product",
  "type": "Topological specimen",
  "number": "8",
  "title": "Finite products.",
  "body": " Finite products  Let be topological spaces, and let . The collection is a basis on . The topology generated by is the product topology on , and is called the product of the spaces .   We show that is a basis.  Axiom 1. Given , we have .  Let and . Given , we have for all , and hence .   "
},
{
  "id": "eg_product_basis_not_topology",
  "level": "2",
  "url": "s_subspace_finite_products.html#eg_product_basis_not_topology",
  "type": "Example",
  "number": "1.6.4",
  "title": "Product basis not a topology necessarily.",
  "body": " Product basis not a topology necessarily   Let with the standard topology, and let with the product topology.   Describe the open sets of qualitatively. Give an example demonstrating that the product basis is not a topology in this case.    Show that the product topology on is equal to the the Euclidean topology.       Firstly, as we will show in more generality in , the set forms a basis for the product topology on . Graphically, these basis elements are just open rectangles in the plane.    An open set in the product topology on is anything that can be written as a union of open rectangles, by the remark made above. To see that the product basis is not in general a topology, consider , where and . We claim that not only is not a product of open sets, it is in fact not the product of any sets. Indeed, if for two sets , then we would have to have , in which case . This is a contradiction since .    Using the remark above, it is enough to show that open cirlces (basis elements in the standard topology) can be written as unions of open rectangles (basis elements in the product topology) and vice versa. This is clear.     "
},
{
  "id": "s_product2",
  "level": "1",
  "url": "s_product2.html",
  "type": "Section",
  "number": "1.7",
  "title": "Arbitrary products",
  "body": " Arbitrary products   We now endeavor to give a topological structure to an arbitrary product of topological spaces. (See and for the definitions of arbitrary tuples and Cartesian products of sets.) As we will see, we can extend the finite product topology to this more general setting in two very different ways.    Product space (arbitrary)  Let be a collection of topological spaces. We define two distinct topologies on the the product .   Box topology  The box topology on is the topology generated by the basis .    Product topology  The product topology on is the topology generated by the basis .   We have ; when the index set is finite, we have .   To see that both collections are indeed bases, observe that for any we have , which is an element of in both cases; and that in both cases if we have , , then , is also an element of .     Product coarser than box   It is clear from the definition that we always have , and hence the product topology is coarser than (contained in) the box topology.    Following Munkres, given a set and the special index set , we write for as a shorthand.   Infinite binary sequences   Let .   Compare the box and product topologies on , where is given the discrete topology.    Compare the box and product topologies on , where is given the trivial topology.       As observed in , the product topology is always contained in the box topology. Let's see whether the inclusion is strict in either case.    Assume has the discrete topology. Since is open in , the set is open in the box topology. To see that it is not open in the product topology, take and let contains . By definition, we have for some , where is an open subset of . Since , we have . Since for all , the element , from which it follows that . We conclude that is not a union of basis elements of the product topology, and hence is not open in the product topology.  It is easy to see that is discrete in the box topology. The argument above shows that is not discrete in the product topology, since the singleton is not open.    Now equip with the trivial topology. Since the only open subsets of are and it follows that a basis element in either topology is either empty (if for any  ) or equal to (if for all ). Since the bases of the two topologies are equal, the topologies are equal. Furthermore, since the only basis elements are and , the topology on is just the trivial one: , we have .       Properties of product spaces   Let be a collection of topological spaces, and let be the box and product topologies on .    Let be a basis for for all . The set is a basis for .  Similarly, the collection of all subsets of of the form , where for all indices in a finite set and for all , is a basis for .    Given subspaces for all , let . The box (resp., product) topology on is equal to the box (resp., product) subspace topology on .    If is Hausdorff (resp., ) for all , then is Hausdorff (resp., ) with respect to both the box and product topologies.    Given subsets for all , we have , where the closure on the right can be taken either with respect to box or product topology on .        We prove each basis axiom separately (for both the box and product basis).  Axiom 1. Given , we can find basis elements containing . We have . Axiom 2. This axiom follows readily from the set theoretic fact that . I'll leave the details to you.    In both cases (box and product) let be the corresponding basis, as defined in . We have . I claim that (in both box and product topology) the last line is equivalent to being open in the box or product topology on the product of the subspaces . Indeed it says that is a union of elements of the form , where by definition of the standard bases in we have open in , and in the case where we use the product topology, for all but finitely many . This is equivalent to being a basis element in either the box topology on the product of the subspaces or the product topology on the product of the subspaces.    Assume is Hausdorff for all . If and are distinct, then we have for some . Since is Hausdorff, there are disjoint open neighborhoods of in . The sets , are disjoint open basis elements for both topologies containing , respectively. Thus is Hausdorff. The proof for the statement is similar.    We prove the equality by showing . . If , there is an index such that , and thus an open set such that . The set is open in both topologies (box and product), contains , and is disjoint with . We conclude that in both topologies.   . If there is an open basis element in the topology (box or product) containing that is disjoint with . It follows that we must have for some and open , and thus that . We conclude that .      "
},
{
  "id": "top_eg_arbitrary_product",
  "level": "2",
  "url": "s_product2.html#top_eg_arbitrary_product",
  "type": "Topological specimen",
  "number": "9",
  "title": "Product space (arbitrary).",
  "body": " Product space (arbitrary)  Let be a collection of topological spaces. We define two distinct topologies on the the product .   Box topology  The box topology on is the topology generated by the basis .    Product topology  The product topology on is the topology generated by the basis .   We have ; when the index set is finite, we have .   To see that both collections are indeed bases, observe that for any we have , which is an element of in both cases; and that in both cases if we have , , then , is also an element of .   "
},
{
  "id": "rm_box_product",
  "level": "2",
  "url": "s_product2.html#rm_box_product",
  "type": "Remark",
  "number": "1.7.1",
  "title": "Product coarser than box.",
  "body": " Product coarser than box   It is clear from the definition that we always have , and hence the product topology is coarser than (contained in) the box topology.   "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "s_product2.html#convention-1",
  "type": "Notation",
  "number": "1.7.2",
  "title": "",
  "body": "Following Munkres, given a set and the special index set , we write for as a shorthand. "
},
{
  "id": "eg_product_binary",
  "level": "2",
  "url": "s_product2.html#eg_product_binary",
  "type": "Example",
  "number": "1.7.3",
  "title": "Infinite binary sequences.",
  "body": " Infinite binary sequences   Let .   Compare the box and product topologies on , where is given the discrete topology.    Compare the box and product topologies on , where is given the trivial topology.       As observed in , the product topology is always contained in the box topology. Let's see whether the inclusion is strict in either case.    Assume has the discrete topology. Since is open in , the set is open in the box topology. To see that it is not open in the product topology, take and let contains . By definition, we have for some , where is an open subset of . Since , we have . Since for all , the element , from which it follows that . We conclude that is not a union of basis elements of the product topology, and hence is not open in the product topology.  It is easy to see that is discrete in the box topology. The argument above shows that is not discrete in the product topology, since the singleton is not open.    Now equip with the trivial topology. Since the only open subsets of are and it follows that a basis element in either topology is either empty (if for any  ) or equal to (if for all ). Since the bases of the two topologies are equal, the topologies are equal. Furthermore, since the only basis elements are and , the topology on is just the trivial one: , we have .     "
},
{
  "id": "th_product_props",
  "level": "2",
  "url": "s_product2.html#th_product_props",
  "type": "Theorem",
  "number": "1.7.4",
  "title": "Properties of product spaces.",
  "body": " Properties of product spaces   Let be a collection of topological spaces, and let be the box and product topologies on .    Let be a basis for for all . The set is a basis for .  Similarly, the collection of all subsets of of the form , where for all indices in a finite set and for all , is a basis for .    Given subspaces for all , let . The box (resp., product) topology on is equal to the box (resp., product) subspace topology on .    If is Hausdorff (resp., ) for all , then is Hausdorff (resp., ) with respect to both the box and product topologies.    Given subsets for all , we have , where the closure on the right can be taken either with respect to box or product topology on .        We prove each basis axiom separately (for both the box and product basis).  Axiom 1. Given , we can find basis elements containing . We have . Axiom 2. This axiom follows readily from the set theoretic fact that . I'll leave the details to you.    In both cases (box and product) let be the corresponding basis, as defined in . We have . I claim that (in both box and product topology) the last line is equivalent to being open in the box or product topology on the product of the subspaces . Indeed it says that is a union of elements of the form , where by definition of the standard bases in we have open in , and in the case where we use the product topology, for all but finitely many . This is equivalent to being a basis element in either the box topology on the product of the subspaces or the product topology on the product of the subspaces.    Assume is Hausdorff for all . If and are distinct, then we have for some . Since is Hausdorff, there are disjoint open neighborhoods of in . The sets , are disjoint open basis elements for both topologies containing , respectively. Thus is Hausdorff. The proof for the statement is similar.    We prove the equality by showing . . If , there is an index such that , and thus an open set such that . The set is open in both topologies (box and product), contains , and is disjoint with . We conclude that in both topologies.   . If there is an open basis element in the topology (box or product) containing that is disjoint with . It follows that we must have for some and open , and thus that . We conclude that .     "
},
{
  "id": "s_prods_convergence_metric",
  "level": "1",
  "url": "s_prods_convergence_metric.html",
  "type": "Section",
  "number": "1.8",
  "title": "Convergence in product spaces",
  "body": " Convergence in product spaces   The relative virtues of the product and box topologies begin to come to light as we look at issues of convergence and metrics in product spaces. In particular, we see in the context of the spaces and that different topologies on these product sets give rise to different and valuable notions of function convergence for real-valued functions.    Pointwise convergence   Let be a collection of topological spaces, let , and let be a sequence of elements of : , using tuple notation, for each we have , where . The sequence  converges pointwise to an element if for all we have : , .     Pointwise convergence   Observe that the definition of pointwise convergence makes no reference to any topology on . Below we investigate how it relates to convergence in the box and product topologies.     Sequences in and   Our understanding of tuples in product spaces as functions pays real dividends when investigating convergence of sequences in these spaces.  For example, if a tuple in is just a function , the graph of which in the real plane is easily visualized: namely, a discrete collection of plotted points for .  Similarly, a tuple in is just a function , which is easily visualized via a graph.  In both cases, sequences of tuples are easily visualized as sequences of functions (via their graphs). Furthermore, for the sequence to converge pointwise pointwise at a given index ( for , and for ) is simply for the sequence of values to converge.     Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .       Convergent sequences in   Let , where is equipped with the standard topology, and let be the sequence defined as for all .    Visualize the sequence in the real plane.    Decide whether the sequence converges pointwise. If so, what does it converge to?    Decide whether the sequence converges in the product topology, and whether it converges in the box topology.      It is relatively easy to see that the sequence converges pointwise to . Since with the standard topology is Hausdorff, it follows that this pointwise limit is unique. By , also converges in the product topology to . We claim does not converge at all in the box topology. First observe, that the only candidate for the limit of this convergence is , using (1) of . Now consider the open set . We have , and yet not only is it not the case that the sequence eventually lies in , in fact we have for all .     Standard bounded metric   Let be a metric space. The function defines a metrix on , called the standard bounded metric corresponding to . The two metrics induce the same topology on     See Munkres for a proof that is a metric, and that and induce the same topology.     Uniform topology  Let for some set , where is equipped with the standard topology. Let for all . The function is a metric called the uniform metric on . The uniform topology is the topology induced by .   See Munkres for a proof that is a metric.      Let for some set , where is equipped with the standard topology, and let be the product, uniform, and box topologies on . We have . When is infinite these inclusions are all strict.    Take any open set in the product topology and any lying in . There is an open neighborhood of lying in of the form , where we may further assume for all . Letting , I claim we have . Indeed, for any , we have This proves that   For the next inclusion, take any open set in the uniform topology. For any we can find such that . Let , which is open in the box topology. Given any , we have . It follows that in the uniform metric we have , showing that . This proves .  The fact that both inclusions are strict when is infinite is left as a homework exercise.     Product topology on   Let , where is equipped with the standard topology, and let for all . The function is a metric on that induces the product topology.    See Munkres. The proof that the product topology is equal to the topology induced by this metric is quite illustrative, and will be a useful model for some of your homework exercises.     When is the product topology on metrizable?    shows that the product topology on is metrizable. It turns out that when is uncountable, this is no longer true. (As we will see later.) In particular, the product topology on is not a metric topology. The product topology on is valuable to us, since it is the natural setting to study pointwise convergence of functions ( ). Consider this an argument for studying topologies beyond metric topologies.     Nonequivalent norms   Both the uniform metric from and the metrix from are induced by norms. Since they induce different topologies on , they furnish us with an example of two nonequivalent norms on an infinite-dimensional real vector space.    "
},
{
  "id": "d_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#d_pointwise_convergence",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Pointwise convergence.",
  "body": " Pointwise convergence   Let be a collection of topological spaces, let , and let be a sequence of elements of : , using tuple notation, for each we have , where . The sequence  converges pointwise to an element if for all we have : , .   "
},
{
  "id": "rm_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#rm_pointwise_convergence",
  "type": "Remark",
  "number": "1.8.2",
  "title": "Pointwise convergence.",
  "body": " Pointwise convergence   Observe that the definition of pointwise convergence makes no reference to any topology on . Below we investigate how it relates to convergence in the box and product topologies.   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "s_prods_convergence_metric.html#example-35",
  "type": "Example",
  "number": "1.8.3",
  "title": "Sequences in <span class=\"process-math\">\\(\\R^\\omega\\)<\/span> and <span class=\"process-math\">\\(\\R^\\R\\)<\/span>.",
  "body": " Sequences in and   Our understanding of tuples in product spaces as functions pays real dividends when investigating convergence of sequences in these spaces.  For example, if a tuple in is just a function , the graph of which in the real plane is easily visualized: namely, a discrete collection of plotted points for .  Similarly, a tuple in is just a function , which is easily visualized via a graph.  In both cases, sequences of tuples are easily visualized as sequences of functions (via their graphs). Furthermore, for the sequence to converge pointwise pointwise at a given index ( for , and for ) is simply for the sequence of values to converge.   "
},
{
  "id": "th_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_pointwise_convergence",
  "type": "Theorem",
  "number": "1.8.4",
  "title": "Pointwise convergence and product topology.",
  "body": " Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .     "
},
{
  "id": "example-36",
  "level": "2",
  "url": "s_prods_convergence_metric.html#example-36",
  "type": "Example",
  "number": "1.8.5",
  "title": "Convergent sequences in <span class=\"process-math\">\\(\\R^\\omega\\)<\/span>.",
  "body": " Convergent sequences in   Let , where is equipped with the standard topology, and let be the sequence defined as for all .    Visualize the sequence in the real plane.    Decide whether the sequence converges pointwise. If so, what does it converge to?    Decide whether the sequence converges in the product topology, and whether it converges in the box topology.      It is relatively easy to see that the sequence converges pointwise to . Since with the standard topology is Hausdorff, it follows that this pointwise limit is unique. By , also converges in the product topology to . We claim does not converge at all in the box topology. First observe, that the only candidate for the limit of this convergence is , using (1) of . Now consider the open set . We have , and yet not only is it not the case that the sequence eventually lies in , in fact we have for all .   "
},
{
  "id": "d_standard_bounded_metric",
  "level": "2",
  "url": "s_prods_convergence_metric.html#d_standard_bounded_metric",
  "type": "Definition",
  "number": "1.8.6",
  "title": "Standard bounded metric.",
  "body": " Standard bounded metric   Let be a metric space. The function defines a metrix on , called the standard bounded metric corresponding to . The two metrics induce the same topology on     See Munkres for a proof that is a metric, and that and induce the same topology.   "
},
{
  "id": "top_eg_uniform_topology",
  "level": "2",
  "url": "s_prods_convergence_metric.html#top_eg_uniform_topology",
  "type": "Topological specimen",
  "number": "10",
  "title": "Uniform topology.",
  "body": " Uniform topology  Let for some set , where is equipped with the standard topology. Let for all . The function is a metric called the uniform metric on . The uniform topology is the topology induced by .   See Munkres for a proof that is a metric.   "
},
{
  "id": "th_product_uniform_box",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_product_uniform_box",
  "type": "Theorem",
  "number": "1.8.7",
  "title": "",
  "body": "  Let for some set , where is equipped with the standard topology, and let be the product, uniform, and box topologies on . We have . When is infinite these inclusions are all strict.    Take any open set in the product topology and any lying in . There is an open neighborhood of lying in of the form , where we may further assume for all . Letting , I claim we have . Indeed, for any , we have This proves that   For the next inclusion, take any open set in the uniform topology. For any we can find such that . Let , which is open in the box topology. Given any , we have . It follows that in the uniform metric we have , showing that . This proves .  The fact that both inclusions are strict when is infinite is left as a homework exercise.   "
},
{
  "id": "th_prod_metric",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_prod_metric",
  "type": "Theorem",
  "number": "1.8.8",
  "title": "Product topology on <span class=\"process-math\">\\(\\R^\\omega\\)<\/span>.",
  "body": " Product topology on   Let , where is equipped with the standard topology, and let for all . The function is a metric on that induces the product topology.    See Munkres. The proof that the product topology is equal to the topology induced by this metric is quite illustrative, and will be a useful model for some of your homework exercises.   "
},
{
  "id": "rm_prod_metrizable",
  "level": "2",
  "url": "s_prods_convergence_metric.html#rm_prod_metrizable",
  "type": "Remark",
  "number": "1.8.9",
  "title": "When is the product topology on <span class=\"process-math\">\\(\\R^I\\)<\/span> metrizable?",
  "body": " When is the product topology on metrizable?    shows that the product topology on is metrizable. It turns out that when is uncountable, this is no longer true. (As we will see later.) In particular, the product topology on is not a metric topology. The product topology on is valuable to us, since it is the natural setting to study pointwise convergence of functions ( ). Consider this an argument for studying topologies beyond metric topologies.   "
},
{
  "id": "rm_nonequivalent_norms",
  "level": "2",
  "url": "s_prods_convergence_metric.html#rm_nonequivalent_norms",
  "type": "Remark",
  "number": "1.8.10",
  "title": "Nonequivalent norms.",
  "body": " Nonequivalent norms   Both the uniform metric from and the metrix from are induced by norms. Since they induce different topologies on , they furnish us with an example of two nonequivalent norms on an infinite-dimensional real vector space.   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-specimens",
  "level": "1",
  "url": "appendix-specimens.html",
  "type": "Appendix",
  "number": "D",
  "title": "Topological specimens",
  "body": " Topological specimens   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
