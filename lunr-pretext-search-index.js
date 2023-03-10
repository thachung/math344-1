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
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .    The power set of a set is the set of all subsets of . We will make use of this notion in our very first definition ( ).   power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .    Lastly, we define the cartesian product of sets, which is a formal description of an ordered collection of objects.   Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.    The notion of a Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set .   tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.       "
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
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.23",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "example-5",
  "level": "2",
  "url": "s_sets_functions.html#example-5",
  "type": "Example",
  "number": "0.1.25",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.26",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.27",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.28",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.29",
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
  "id": "p-133",
  "level": "2",
  "url": "s_proof_technique.html#p-133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "p-134",
  "level": "2",
  "url": "s_proof_technique.html#p-134",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "p-136",
  "level": "2",
  "url": "s_proof_technique.html#p-136",
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
  "id": "p-145",
  "level": "2",
  "url": "s_proof_technique.html#p-145",
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
  "body": " Closed sets, closure, and interior   Closed sets   Let be a topological space. A subset is closed if its complement is open. Equivalently, a subset is closed if and only if for some open set .     Property of closed sets   Let be a topological space.   Trivial sets  Both and are closed sets.    Finite unions  If are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.       Statement (1) follows from the observation that , and .  Assume is closed for ; then by DeMorgan's law , which is open since is open for all and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By DeMorgan's law we have , which is open since is open and arbitrary unions of open sets are open.     Closed sets determine topology  In general, given a set the set complement operation is defines a bijection , that is self-inverse: , we have for all subsets . It follows from the that the closed sets of are in bijective correspondence with the open sets, and thus that a topology on is uniquely determined by specifying any collection of sets satisfying (1)-(3) from . In other words, a topology is determined by specifying either its open sets or its closed sets.    Closed in trivial and discrete topologies     If has the trivial topology, then the only open sets of are . Hence the only closed sets are and .    If has the discrete topology, then every subset of is open. It follows that any subset of is closed, since its complement is open. We conclude that al subsets of are both open and closed in the discrete topology.       Closed in the cofinite topology   Let be a set endowed with the cofinite topology. An set is open in if and only if (a) or (b) is finite. It follows that a set is closed if and only if (a) or (b) for a cofinite set if and only if (a) or (b) is finite.     Basis description of closed sets   Let be a topological space with basis . A set is closed if and only if for all , there is a basis element satisfying .    By definition a set is closed if and only if its complement is open. Using , we see that is open if and only if for all there is a basis element satisfying .     Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                   The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .        Interior and closure of a set   Let be a subset of the topological space .   Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .        Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .    is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .       Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.     Using smallest\/largest characterization of interior\/closure  Statements (1)-(2) of provide a potentially useful indirect way of computing the interior or closure of a set .   Interior  Find an open set contained in and show that for any other open set we have . It follows that .    Closure  Find a closed set containing and show that for any other closed set containing we have . It follows that .       Interior and closure of  Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .     First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .       Interior and closure in cofinite topology   Let be a set endowed with the cofinite topology. For describe and . Use cases.        "
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
  "body": " Property of closed sets   Let be a topological space.   Trivial sets  Both and are closed sets.    Finite unions  If are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.       Statement (1) follows from the observation that , and .  Assume is closed for ; then by DeMorgan's law , which is open since is open for all and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By DeMorgan's law we have , which is open since is open and arbitrary unions of open sets are open.   "
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
  "body": " Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                   The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .      "
},
{
  "id": "d_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_interior_closure",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Interior and closure of a set.",
  "body": " Interior and closure of a set   Let be a subset of the topological space .   Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .      "
},
{
  "id": "th_equivalent_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_equivalent_interior_closure",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Equivalent notions of interior and closure.",
  "body": " Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .    is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .       Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.   "
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
  "body": " Interior and closure of  Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .     First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .     "
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
  "body": " Limit points and the Hausdorff property       Neighborhood of element or set   Let be a topological space. An open neighborhood of an element is an open set that contains ; an open neighborhood of a subset is an open set such that .  More generally, a (not necessarily open) neighborhood of a point or subset is a subset whose interior contains or : equivalently, contains an open set containing or .     Limit point of a set   Let be a subset of the topological space . An element is a limit point of if any open neighborhood of intersects in a point distinct from : for any open neighborhood of , we have .     Limit points in   Let with the standard topology. Determine the set of all limit points for the following sets.                               Limit points and closure   Let be a subset of the topological space , and let be the set of all limit points of . We have .     Closed, closure, limit points   Let be a subset of the topological space . The following are equivalent.     is closed.     contains all of its limit points.     .       Hausdorff property   A topological space is Hausdorff if for any two distinct elements ( , ) there are open neighborhoods of and , respectively, that are disjoint ( , ).     Hausdorff properties   Let be a Hausdorff space.    All singletons are closed.    All finite subsets of are closed.       The -axiom   A topological space is (or is a -space , or satisfies the -axiom ) if all finite subsets of are closed.     as separation axiom  The is called a separation axiom , or Trennungsaxiom in German: hence the T . To see more explicitly why this is called a separation axiom, note that (a) is equivalent to the property that any singleton is closed, and (b) this in turn is equivalent to saying for any two elements there is an open neighborhood of that does not contain ; we think of this as separating and .  We will say more about separation axioms later. For now, I'll mention that the Hausdorff property is itself a separation axiom, called the -axiom.    Hausdorff versus   Let be a topological space.    If is Hausdorff, then is     It is not the case that if is , then must be Hausdorff.    Using logical shorthand, we have     Statement (1) follows from .  We provide a counterexample to the claim that implies Hausdorff. Let be any infinite set endowed with the cofinite topology. The closed sets of are precisely the finite sets and itself, as we saw in . Thus is . On the other hand, is not Hausdorff. Indeed take any two distinct elements . Let and be any pair of open neighborhoods of and , respectively. We will show that . If either of the open neighborhoods is equal to itself, the claim is obvious. Otherwise is a finite set that does not contain and is a finite set that does not contain . Since is infinite, , and hence , as desired.     Metric spaces are Hausdorff     Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.         Let be a metric space. Given any , we have . The open balls are disjoint open neighrborhoods of and , respectively.    Let be an infinite set with the cofinite topology. We will show that is not Hausdorff and hence not a metric space. In fact, we will show that any two nonempty open sets in intersect nontrivially. Indeed, given nonempty open sets , we have by definition , for finite sets . Their intersection is the open set Since is infinite and the are finite, we have , and thus .       The Zariski topology on is an example of a non-Hausdorff topology that is the basis for algebraic geometry.   Zariski topology on  Let , and let be the set of polynomials in the unknowns with real coefficients. For any define . In other words, is the set of points in that are simultaneous zeros for all polynomials . The set defines a topology on called the Zariski topology . As you will show in homework (for ), this topology is but not Hausdorff.   Proved in homework for . The general proof is not much different.     Convergent sequence   Let be a topological space. A sequence of elements of  converges to the element , denoted , if for any open neighborhood of , there is a positive integer such that for all . We say is a convergent sequence in this case, and call the limit of the sequence.     Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!    Let and let be any open set containing . We have for some , . Since this list is finite, we can pick such that if , then for any , and hence that , as desired.  Note: the same argument shows that any sequence containing infinitely many distinct elements is convergent, and in fact converges to all elements of .     Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.    Assume and let . Let be disjoint open sets containing , respectively. By convergence, there is an such that if , then . It follows that for all and hence that does not converge to .     Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.    See Munkres.    "
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
  "body": " Metric spaces are Hausdorff     Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.         Let be a metric space. Given any , we have . The open balls are disjoint open neighrborhoods of and , respectively.    Let be an infinite set with the cofinite topology. We will show that is not Hausdorff and hence not a metric space. In fact, we will show that any two nonempty open sets in intersect nontrivially. Indeed, given nonempty open sets , we have by definition , for finite sets . Their intersection is the open set Since is infinite and the are finite, we have , and thus .      "
},
{
  "id": "project-7",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#project-7",
  "type": "Topological specimen",
  "number": "7",
  "title": "Zariski topology on <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Zariski topology on  Let , and let be the set of polynomials in the unknowns with real coefficients. For any define . In other words, is the set of points in that are simultaneous zeros for all polynomials . The set defines a topology on called the Zariski topology . As you will show in homework (for ), this topology is but not Hausdorff.   Proved in homework for . The general proof is not much different.   "
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
  "body": " Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!    Let and let be any open set containing . We have for some , . Since this list is finite, we can pick such that if , then for any , and hence that , as desired.  Note: the same argument shows that any sequence containing infinitely many distinct elements is convergent, and in fact converges to all elements of .   "
},
{
  "id": "th_Hausdorff_unique_limits",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_Hausdorff_unique_limits",
  "type": "Theorem",
  "number": "1.5.14",
  "title": "Unique limits in Hausdorff spaces.",
  "body": " Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.    Assume and let . Let be disjoint open sets containing , respectively. By convergence, there is an such that if , then . It follows that for all and hence that does not converge to .   "
},
{
  "id": "th_T1_limitpoints",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_T1_limitpoints",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Limit points in <span class=\"process-math\">\\(T_1\\)<\/span>-spaces.",
  "body": " Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.    See Munkres.   "
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
  "number": "8",
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
  "number": "9",
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
  "number": "10",
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
  "body": " Convergence in product spaces   The relative virtues of the product and box topologies begin to come to light as we look at issues of convergence and metrics in product spaces. In particular, we see in the context of the spaces and that different topologies on these product sets give rise to different and valuable notions of function convergence for real-valued functions.    Pointwise convergence   Let be a collection of topological spaces, let , and let be a sequence of elements of : , using tuple notation, for each we have , where . The sequence  converges pointwise to an element if for all we have : , .     Pointwise convergence   Observe that the definition of pointwise convergence makes no reference to any topology on . Below we investigate how it relates to convergence in the box and product topologies.     Sequences in and   Our understanding of tuples in product spaces as functions pays real dividends when investigating convergence of sequences in these spaces.  For example, if a tuple in is just a function , the graph of which in the real plane is easily visualized: namely, a discrete collection of plotted points for .  Similarly, a tuple in is just a function , which is easily visualized via a graph.  In both cases, sequences of tuples are easily visualized as sequences of functions (via their graphs). Furthermore, for the sequence to converge pointwise pointwise at a given index ( for , and for ) is simply for the sequence of values to converge.     Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .         Suppose in either topology. Fix and let be any open set containing . The set is an open neighborhood of in both topologies. By convergence there is an such that for all . It follows that for all . This proves that for all .    Suppose the sequence converges to pointwise. To show in the product topology it is enough to show that for any base open set of the form there is an such that if , then . Since converges to pointwise, for each , there is an such that if , then . Setting , it follows that if then for . Since for all we conclude that for all , as desired.        Convergent sequences in   Let , where is equipped with the standard topology, and let be the sequence defined as for all .    Visualize the sequence in the real plane.    Decide whether the sequence converges pointwise. If so, what does it converge to?    Decide whether the sequence converges in the product topology, and whether it converges in the box topology.      It is relatively easy to see that the sequence converges pointwise to . Since with the standard topology is Hausdorff, it follows that this pointwise limit is unique. By , also converges in the product topology to . We claim does not converge at all in the box topology. First observe, that the only candidate for the limit of this convergence is , using (1) of . Now consider the open set . We have , and yet not only is it not the case that the sequence eventually lies in , in fact we have for all .     Standard bounded metric   Let be a metric space. The function defines a metrix on , called the standard bounded metric corresponding to . The two metrics induce the same topology on     See Munkres for a proof that is a metric, and that and induce the same topology.     Uniform topology  Let for some set , where is equipped with the standard topology. Let for all . The function is a metric called the uniform metric on . The uniform topology is the topology induced by .   See Munkres for a proof that is a metric.      Let for some set , where is equipped with the standard topology, and let be the product, uniform, and box topologies on . We have . When is infinite these inclusions are all strict.    Take any open set in the product topology and any lying in . There is an open neighborhood of lying in of the form , where we may further assume for all . Letting , I claim we have . Indeed, for any , we have This proves that   For the next inclusion, take any open set in the uniform topology. For any we can find such that . Let , which is open in the box topology. Given any , we have . It follows that in the uniform metric we have , showing that . This proves .  The fact that both inclusions are strict when is infinite is left as a homework exercise.     Product topology on   Let , where is equipped with the standard topology, and let for all . The function is a metric on that induces the product topology.    See Munkres. The proof that the product topology is equal to the topology induced by this metric is quite illustrative, and will be a useful model for some of your homework exercises.     When is the product topology on metrizable?    shows that the product topology on is metrizable. It turns out that when is uncountable, this is no longer true. (As we will see later.) In particular, the product topology on is not a metric topology. The product topology on is valuable to us, since it is the natural setting to study pointwise convergence of functions ( ). Consider this an argument for studying topologies beyond metric topologies.     Nonequivalent norms   Both the uniform metric from and the metrix from are induced by norms. Since they induce different topologies on , they furnish us with an example of two nonequivalent norms on an infinite-dimensional real vector space.    "
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
  "body": " Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .         Suppose in either topology. Fix and let be any open set containing . The set is an open neighborhood of in both topologies. By convergence there is an such that for all . It follows that for all . This proves that for all .    Suppose the sequence converges to pointwise. To show in the product topology it is enough to show that for any base open set of the form there is an such that if , then . Since converges to pointwise, for each , there is an such that if , then . Setting , it follows that if then for . Since for all we conclude that for all , as desired.      "
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
  "number": "11",
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
  "id": "s_continuous",
  "level": "1",
  "url": "s_continuous.html",
  "type": "Section",
  "number": "1.9",
  "title": "Continuous functions",
  "body": " Continuous functions   In calculus you learn that a function is defined to be continuous if for all there is a such that for all we have the implication . Now that we have some experience generalizing analysis concepts to topological ones, let's see how best this translates to arbitrary topologies.    Continuous function   Let be topological spaces. A function is continuous if for all open sets , the set is open in . Using logical shorthand: .     Preimage properties   Continuity is defined in terms of preimages of sets under a function . Thankfully, the preimage operation behaves very well with respect to our various set operations. In particular, we have the following identities, which you may make use of without further ado:      Continuous functions: basic examples     Identity function  Given a topological space , the identity function is continuous. Here we take as the topology of both the domain and codomain.    Constant functions  Let be topological spaces. For any fixed the constant function , defined as for all is continuous.    Subspace inclusions  Let be a subspace of . The inclusion map is continuous with respect to the subspace topology on .    Maps from discrete spaces  If is equipped with the discrete topology, then any function to a topological space is continuous.    Maps to trivial spaces  If is equipped with the trivial topology, then any map from a topological space to is continous.      These are all pretty elementary. I'll prove (3). Let be a subspace and let continuous. Given any open set , we have which by definition is open in the subspace topology. Thus is continuous.     Non-continuous inclusion   Show that the identity map is not continuous. Here the topology of the domain is the standard one, and the topology on the codomain is the lower limit topology.    For any we have . If we choose to be any open set of that is not open in the standard topology, it follows that is not open in and hence that is not continuous. We may take for example.  Note: let be two topologies on the set , and for let denote the space with underlying set and topology . The same argument above can be used to show that is continuous if and only if .     Products and projections   Let be a collection of topological spaces, and let . For each define the projection function as . In other words, the -th projection map returns the -th coordinate of an element of .    Prove: if is given the product topology, then is continuous for all .    Prove: given a topology on , we have continuous for all if and only if contains the product topology. Thus, in particular, the product topology is the coarsest topology on making each projection map continuous.      It is enough to prove (2), since it clearly implies (1). The maps are continuous in a topology if and only if for all and open the preimage is open in . Next it clear that is open in for all if and only if is open for any finite set . Since these sets form a basis for the product topology, we conclude that the projections are all continuous if and only if is finer than the product topology.      Let be a function between the topological spaces , and let be a basis for . The following statements are equivalent.     is continuous.    For all , the preimage is open in .      It is clear that (1) implies (2). Assume (2) is true. Given open , we can write with . It follows that is open, since by assumption each is open.     Continuity equivalences   Let be a function between the topological spaces . The following statements are equivalent.     is continuous.    For all , we have .    For all closed sets , the preimage is closed in .    For all and open neighborhood , there is an open neighborhood such that .       . Take . We have for some . If is any open neighborhood of , then since is continuous is an open neighborhood of . Since , there exists . It follows that , showing this intersection is nonempt. We concdlue that , as desited.   . Assume (2) holds of . Given closed let . To show is closed, we will show that . Since , this is equivalent to showing ; but this follows from (2) since , where the last inclusion in this chain follows from the fact that is closed and contains .   . Let , and let be an open neighborhood of . The set is closed, whence is closed. It follows that is an open set containing , and we have .   . We assume (4). Let be an open set. For any , there is by (4) (taking open set ) an open set such that . It follows that . Thus for any there is an open such that . It follows that is open, as desired.      Let be a map between topological spaces. We say that is continuous at x , for , if for all open neighborhoods , there is an open neighborhood such that .     Building continuous functions     Composition  If and are continuous, then the composition is continuous.    Restriction  If is continuous, and is a subspace, then the restriction is continuous.    Expansion  If is continuous and is a subspace of , then the function obtained by composing with the inclusion is continuous.    Local on source (open pasting)  If is a function between topological spaces and there is a collection of open sets such that and the restrictions are continuous, then is continuous.    Closed pasting  Let be topological spaces, and suppose , where are closed sets. Given continuous functions and that satisfy for all , the function defined as is continuous.      Statements (1)-(3) are elementary, and can be found in Munkres.  Statement (4) follows from equivalent condition (4) from . Indeed, take any and open set . Since for some , and since is continuous, there is an open with , such that . Since is open in and is open in , we conclude is open in , as desired.  To prove statement (5) we show that is closed for any closed set . Since if and only if and or and , we have . Since and are closed we have closed in and closed in . Since and are closed, transitivity of closedness implies and are closed in . We conclude is closed, as desired.    "
},
{
  "id": "d_continuous_function",
  "level": "2",
  "url": "s_continuous.html#d_continuous_function",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Continuous function.",
  "body": " Continuous function   Let be topological spaces. A function is continuous if for all open sets , the set is open in . Using logical shorthand: .   "
},
{
  "id": "rm_preimage",
  "level": "2",
  "url": "s_continuous.html#rm_preimage",
  "type": "Remark",
  "number": "1.9.2",
  "title": "Preimage properties.",
  "body": " Preimage properties   Continuity is defined in terms of preimages of sets under a function . Thankfully, the preimage operation behaves very well with respect to our various set operations. In particular, we have the following identities, which you may make use of without further ado:    "
},
{
  "id": "example-37",
  "level": "2",
  "url": "s_continuous.html#example-37",
  "type": "Example",
  "number": "1.9.3",
  "title": "Continuous functions: basic examples.",
  "body": " Continuous functions: basic examples     Identity function  Given a topological space , the identity function is continuous. Here we take as the topology of both the domain and codomain.    Constant functions  Let be topological spaces. For any fixed the constant function , defined as for all is continuous.    Subspace inclusions  Let be a subspace of . The inclusion map is continuous with respect to the subspace topology on .    Maps from discrete spaces  If is equipped with the discrete topology, then any function to a topological space is continuous.    Maps to trivial spaces  If is equipped with the trivial topology, then any map from a topological space to is continous.      These are all pretty elementary. I'll prove (3). Let be a subspace and let continuous. Given any open set , we have which by definition is open in the subspace topology. Thus is continuous.   "
},
{
  "id": "example-38",
  "level": "2",
  "url": "s_continuous.html#example-38",
  "type": "Example",
  "number": "1.9.4",
  "title": "Non-continuous inclusion.",
  "body": " Non-continuous inclusion   Show that the identity map is not continuous. Here the topology of the domain is the standard one, and the topology on the codomain is the lower limit topology.    For any we have . If we choose to be any open set of that is not open in the standard topology, it follows that is not open in and hence that is not continuous. We may take for example.  Note: let be two topologies on the set , and for let denote the space with underlying set and topology . The same argument above can be used to show that is continuous if and only if .   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "s_continuous.html#example-39",
  "type": "Example",
  "number": "1.9.5",
  "title": "Products and projections.",
  "body": " Products and projections   Let be a collection of topological spaces, and let . For each define the projection function as . In other words, the -th projection map returns the -th coordinate of an element of .    Prove: if is given the product topology, then is continuous for all .    Prove: given a topology on , we have continuous for all if and only if contains the product topology. Thus, in particular, the product topology is the coarsest topology on making each projection map continuous.      It is enough to prove (2), since it clearly implies (1). The maps are continuous in a topology if and only if for all and open the preimage is open in . Next it clear that is open in for all if and only if is open for any finite set . Since these sets form a basis for the product topology, we conclude that the projections are all continuous if and only if is finer than the product topology.   "
},
{
  "id": "th_continuity_basis",
  "level": "2",
  "url": "s_continuous.html#th_continuity_basis",
  "type": "Theorem",
  "number": "1.9.6",
  "title": "",
  "body": "  Let be a function between the topological spaces , and let be a basis for . The following statements are equivalent.     is continuous.    For all , the preimage is open in .      It is clear that (1) implies (2). Assume (2) is true. Given open , we can write with . It follows that is open, since by assumption each is open.   "
},
{
  "id": "th_continuous_equivalence",
  "level": "2",
  "url": "s_continuous.html#th_continuous_equivalence",
  "type": "Theorem",
  "number": "1.9.7",
  "title": "Continuity equivalences.",
  "body": " Continuity equivalences   Let be a function between the topological spaces . The following statements are equivalent.     is continuous.    For all , we have .    For all closed sets , the preimage is closed in .    For all and open neighborhood , there is an open neighborhood such that .       . Take . We have for some . If is any open neighborhood of , then since is continuous is an open neighborhood of . Since , there exists . It follows that , showing this intersection is nonempt. We concdlue that , as desited.   . Assume (2) holds of . Given closed let . To show is closed, we will show that . Since , this is equivalent to showing ; but this follows from (2) since , where the last inclusion in this chain follows from the fact that is closed and contains .   . Let , and let be an open neighborhood of . The set is closed, whence is closed. It follows that is an open set containing , and we have .   . We assume (4). Let be an open set. For any , there is by (4) (taking open set ) an open set such that . It follows that . Thus for any there is an open such that . It follows that is open, as desired.   "
},
{
  "id": "d_continuity_at_x",
  "level": "2",
  "url": "s_continuous.html#d_continuity_at_x",
  "type": "Definition",
  "number": "1.9.8",
  "title": "",
  "body": "  Let be a map between topological spaces. We say that is continuous at x , for , if for all open neighborhoods , there is an open neighborhood such that .   "
},
{
  "id": "th_building_continuous_functions",
  "level": "2",
  "url": "s_continuous.html#th_building_continuous_functions",
  "type": "Theorem",
  "number": "1.9.9",
  "title": "Building continuous functions.",
  "body": " Building continuous functions     Composition  If and are continuous, then the composition is continuous.    Restriction  If is continuous, and is a subspace, then the restriction is continuous.    Expansion  If is continuous and is a subspace of , then the function obtained by composing with the inclusion is continuous.    Local on source (open pasting)  If is a function between topological spaces and there is a collection of open sets such that and the restrictions are continuous, then is continuous.    Closed pasting  Let be topological spaces, and suppose , where are closed sets. Given continuous functions and that satisfy for all , the function defined as is continuous.      Statements (1)-(3) are elementary, and can be found in Munkres.  Statement (4) follows from equivalent condition (4) from . Indeed, take any and open set . Since for some , and since is continuous, there is an open with , such that . Since is open in and is open in , we conclude is open in , as desired.  To prove statement (5) we show that is closed for any closed set . Since if and only if and or and , we have . Since and are closed we have closed in and closed in . Since and are closed, transitivity of closedness implies and are closed in . We conclude is closed, as desired.   "
},
{
  "id": "s_homeomorphisms",
  "level": "1",
  "url": "s_homeomorphisms.html",
  "type": "Section",
  "number": "1.10",
  "title": "Homeomorphisms",
  "body": " Homeomorphisms   Consider the two spaces and , both equipped with the discrete topology. As sets they are clearly not equal; and yet considered as topological spaces they are essentially the same. Indeed, we call both spaces the discrete topological space on a set of two elements. The notion of a homeomorphism gives us a rigorous way of determining when two spaces are essentially the same thing, topologically speaking .    Homeomorphism   Let and be topological spaces. A function is a homeomorphism if the following conditions are satisfied:    is continuous;     is invertible (equivalently, is bijective);    the inverse function is continuous.   Two spaces are homeomorphic if there is a homeomorphism between them.     Homeomorphism: inverse must be continuous   You may have met analogs of the homeomorphism in other areas of mathematics: , in linear algebra or group theory. In category theory it is what is called an isomorphism . The basic idea is that once you decide what the structure-preserving maps are between objects (continuous functions for topological spaces, linear transformations for vector spaces, homomorphisms for groups), an isomorphism is essentially just an invertible structure-preserving map: a vector space isomorphism is an invertible linear transformation; a group isomorphism is an invertible group homomorphism. The only subtlety is that you want the inverse of this invertible function to also be structure preserving! For linear transformations and group homomorphisms this is automatic. Not so for continuous functions! The inverse of an invertible continuous function need not be continuous, as the example below illustrates.     Homeomorphism: inverse must be continuous   Let and be the spaces obtained by equipping with the standard and discrete topologies, respectively. The identity function is clearly continuous and invertible. In fact, we have . However, is not continuous. Indeed, is open in , but is not open in . Thus is an invertible continuous function that is not a homeomorphism.     Homeomorphic equivalence relation   For topological spaces , define the relation to mean is homeomorphic to . This relation is an equivalence relation. That is, for all topological spaces we have . These three properties follow from the simple facts that (1) the identity map is a homeomorphism, (2) the inverse of a homeomorphism is a homeomomoprhism, (3) the composition of homeomorphisms is a homeomorphism.     All open intervals of are homeomorphic   In the following, all intervals are treated as metric spaces with the Euclidean metric on . Make use of any function whose continuity properties are well known.    Prove that any finite open interval is homeomorphic to .    Prove that and are homeomorphic.    Prove that and are both homeomorphic to .    Explain why we may now conclude that all open intervals of are homeomorphic.        The function defined as is linear (hence continuous) and has continuous inverse .    The function is continuous and has continuous inverse .    The functions , , and , are continuous and have continuous inverses and .    This is now the result of the fact that being homeomorphic is an equivalence relation. In more detail, from (1) we know that all finite open intervals are homeomorphic; this in conjunction with (2) shows that all finite open intervals are homemorphic to . From (3) we conclude that all half-finite intervals are homeomorphic to . Since any open interval is either finite, half-finite, or equal to , we conclude that all open intervals are homeomorphic.       Universal property of product space   Let be a collection of topological spaces, and let equipped with the product topology. Let be the -th projection map.    Product mapping property  Given any topological space and any collection of continuous maps , there is a unique continuous map satisfying for all .  In other words, specifying a continuous map into the product space is equivalent to specifying continuous maps into for all     Unique up to homeomorphism  If is any other topological space equipped with continuous maps , and if the product mapping property (1) is satisfied with replacing and replacing , then is homeomorphic to .  In other words, up to homeomorphism, the mapping property uniquely characterizes the product space.        First observe that equality for elements in can be express in terms of the projection maps as follows: . Using this fact, we see that given a function we have . Thus the function is the unique function from to satisfying for all . To see that this is continuous, we show that is open for any base open set . For such a we have for some open sets , . By definition of we have if and only if if and only if for all . Thus . Since each is continuous, we conclude that is open for all , and hence is open.    Let together with continuous maps be any other space that satisfies the product mapping property (1). By (1) (taking ) there is a continuous function satisfying . Similarly, since also satisfies the product mapping property, we have (now taking in (1)) a continuous map satisfying . I claim and : , is a continuous inverse of , and thus is a homeomorphism between and .  To see why we use the uniqueness claim in the product mapping property (twice). Indeed, the function is continuous and satisfies for all . But the function also satisfies for all . By the uniqueness claim of the product mapping property, we conclude , as desired. The proof that is nearly identical, now applying the product mapping propery to maps into .       Open and closed maps   Let be a function between topological spaces.    is open if for all open we have open in .     is closed if for all closed we have closed in .        Homeomorphism equivalences   Let be a function between topological spaces. The following statements are equivalent.    is a homeomorphism.     is continuous, invertible, and open.     is continuous, invertible, and closed.      Assume is continous and invertible throughout. To be a homeomorphism we need to be continuous. Since if and only if , we see that . Thus continuous if and only if is open for all open , if and only if is open for all open , if and only if is open. The same argument with closed replacing open shows is continuous if and only if is closed. The equivalence of (1)-(3) now follows.    Open and closed maps   Don't be mislead by into thinking that being an open continuous map is equivalent to being a closed continuous map; we need the additional assumption of invertibility to guarantee equivalence. As an example, consider any constant function from to itself: this is clearly continuous and closed, but not open.     Topological properties   Let be a property that is either satisfied or not satisfied by any given topological space. We say is a topological property if it is invariant under homeomorphisms: , if and are homeomorphic, then satisfies if and only if satisfies .     Topological properties   It is easy to see that the properties of being discrete, , Hausdorff, or a metric space are topological.     Continuous bijection onto circle   Let and , and equip each set with the subspace topology inherited from (resp. ) with its Euclidean topology.  Prove: the function defined as is continuous and invertible, but not a homeomorphism.    Recall first that on the product topology, Euclidean metric topology, and box topology are all equal. Since and are continuous, it follows from that the map is continuous. Next, since , where , it follows that is continuous: indeed, for any open set , we have for some open , and , which is open since is continuous.  The usual trigonometric arguments show that is injective and surjective. However, is not open, and hence not a homeomorphism. Indeed, let , which is open in . The image is easily seen to be the upper half of the circle minus the point : in particular, all points have nonnegative -coordinates. On the other hand, we have and with respect to the subspace topology on any open set containing contains elements of whose -coordinate is negative. It follows that is not open.    In light of , it is natural to ask whether given topological spaces there is a space with continuous maps that satisfies a dual mapping property to that of the product. Indeed, there is, and we call it the coproduct of the .   Coproduct space  Let be a collection of topological spaces, let be the disjoint union of the , and let be the the inclusion maps identifying each with a subset of . The coproduct topology on is the topology generated by the basis defined as follows: . We call together with the topology the coproduct topology of the . With respect to this topology, each injection is continuous.    Universal property of coproduct space   Let be a collection of topological spaces, and let be their coproduct. For each let be the inclusion map identifying with a subset of .    Coproduct mapping property  Given any topological space and any collection of continuous maps , there is a unique continuous map satisfying for all .  In other words, specifying a continuous map out from to is equivalent to specifying continuous maps for all .    Unique up to homeomorphism  If is any other topological space equipped with continuous maps , and if the coproduct mapping property (1) is satisfied with replacing and replacing , then is homeomorphic to .  In other words, up to homeomorphism, the coproduct mapping property uniquely characterizes the product space.      Mimic the proof of step by step.    "
},
{
  "id": "d_homeomorphism",
  "level": "2",
  "url": "s_homeomorphisms.html#d_homeomorphism",
  "type": "Definition",
  "number": "1.10.1",
  "title": "Homeomorphism.",
  "body": " Homeomorphism   Let and be topological spaces. A function is a homeomorphism if the following conditions are satisfied:    is continuous;     is invertible (equivalently, is bijective);    the inverse function is continuous.   Two spaces are homeomorphic if there is a homeomorphism between them.   "
},
{
  "id": "rm_homeomorphism",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_homeomorphism",
  "type": "Remark",
  "number": "1.10.2",
  "title": "Homeomorphism: inverse must be continuous.",
  "body": " Homeomorphism: inverse must be continuous   You may have met analogs of the homeomorphism in other areas of mathematics: , in linear algebra or group theory. In category theory it is what is called an isomorphism . The basic idea is that once you decide what the structure-preserving maps are between objects (continuous functions for topological spaces, linear transformations for vector spaces, homomorphisms for groups), an isomorphism is essentially just an invertible structure-preserving map: a vector space isomorphism is an invertible linear transformation; a group isomorphism is an invertible group homomorphism. The only subtlety is that you want the inverse of this invertible function to also be structure preserving! For linear transformations and group homomorphisms this is automatic. Not so for continuous functions! The inverse of an invertible continuous function need not be continuous, as the example below illustrates.   "
},
{
  "id": "eg_homeomorphism_not_",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_homeomorphism_not_",
  "type": "Example",
  "number": "1.10.3",
  "title": "Homeomorphism: inverse must be continuous.",
  "body": " Homeomorphism: inverse must be continuous   Let and be the spaces obtained by equipping with the standard and discrete topologies, respectively. The identity function is clearly continuous and invertible. In fact, we have . However, is not continuous. Indeed, is open in , but is not open in . Thus is an invertible continuous function that is not a homeomorphism.   "
},
{
  "id": "rm_homeomorphic_equivalence_relation",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_homeomorphic_equivalence_relation",
  "type": "Remark",
  "number": "1.10.4",
  "title": "Homeomorphic equivalence relation.",
  "body": " Homeomorphic equivalence relation   For topological spaces , define the relation to mean is homeomorphic to . This relation is an equivalence relation. That is, for all topological spaces we have . These three properties follow from the simple facts that (1) the identity map is a homeomorphism, (2) the inverse of a homeomorphism is a homeomomoprhism, (3) the composition of homeomorphisms is a homeomorphism.   "
},
{
  "id": "eg_R_interval",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_R_interval",
  "type": "Example",
  "number": "1.10.5",
  "title": "All open intervals of <span class=\"process-math\">\\(\\R\\)<\/span> are homeomorphic.",
  "body": " All open intervals of are homeomorphic   In the following, all intervals are treated as metric spaces with the Euclidean metric on . Make use of any function whose continuity properties are well known.    Prove that any finite open interval is homeomorphic to .    Prove that and are homeomorphic.    Prove that and are both homeomorphic to .    Explain why we may now conclude that all open intervals of are homeomorphic.        The function defined as is linear (hence continuous) and has continuous inverse .    The function is continuous and has continuous inverse .    The functions , , and , are continuous and have continuous inverses and .    This is now the result of the fact that being homeomorphic is an equivalence relation. In more detail, from (1) we know that all finite open intervals are homeomorphic; this in conjunction with (2) shows that all finite open intervals are homemorphic to . From (3) we conclude that all half-finite intervals are homeomorphic to . Since any open interval is either finite, half-finite, or equal to , we conclude that all open intervals are homeomorphic.     "
},
{
  "id": "th_product_universal_prop",
  "level": "2",
  "url": "s_homeomorphisms.html#th_product_universal_prop",
  "type": "Theorem",
  "number": "1.10.6",
  "title": "Universal property of product space.",
  "body": " Universal property of product space   Let be a collection of topological spaces, and let equipped with the product topology. Let be the -th projection map.    Product mapping property  Given any topological space and any collection of continuous maps , there is a unique continuous map satisfying for all .  In other words, specifying a continuous map into the product space is equivalent to specifying continuous maps into for all     Unique up to homeomorphism  If is any other topological space equipped with continuous maps , and if the product mapping property (1) is satisfied with replacing and replacing , then is homeomorphic to .  In other words, up to homeomorphism, the mapping property uniquely characterizes the product space.        First observe that equality for elements in can be express in terms of the projection maps as follows: . Using this fact, we see that given a function we have . Thus the function is the unique function from to satisfying for all . To see that this is continuous, we show that is open for any base open set . For such a we have for some open sets , . By definition of we have if and only if if and only if for all . Thus . Since each is continuous, we conclude that is open for all , and hence is open.    Let together with continuous maps be any other space that satisfies the product mapping property (1). By (1) (taking ) there is a continuous function satisfying . Similarly, since also satisfies the product mapping property, we have (now taking in (1)) a continuous map satisfying . I claim and : , is a continuous inverse of , and thus is a homeomorphism between and .  To see why we use the uniqueness claim in the product mapping property (twice). Indeed, the function is continuous and satisfies for all . But the function also satisfies for all . By the uniqueness claim of the product mapping property, we conclude , as desired. The proof that is nearly identical, now applying the product mapping propery to maps into .     "
},
{
  "id": "d_open_closed_map",
  "level": "2",
  "url": "s_homeomorphisms.html#d_open_closed_map",
  "type": "Definition",
  "number": "1.10.7",
  "title": "Open and closed maps.",
  "body": " Open and closed maps   Let be a function between topological spaces.    is open if for all open we have open in .     is closed if for all closed we have closed in .      "
},
{
  "id": "th_homeo_open_closed",
  "level": "2",
  "url": "s_homeomorphisms.html#th_homeo_open_closed",
  "type": "Theorem",
  "number": "1.10.8",
  "title": "Homeomorphism equivalences.",
  "body": " Homeomorphism equivalences   Let be a function between topological spaces. The following statements are equivalent.    is a homeomorphism.     is continuous, invertible, and open.     is continuous, invertible, and closed.      Assume is continous and invertible throughout. To be a homeomorphism we need to be continuous. Since if and only if , we see that . Thus continuous if and only if is open for all open , if and only if is open for all open , if and only if is open. The same argument with closed replacing open shows is continuous if and only if is closed. The equivalence of (1)-(3) now follows.  "
},
{
  "id": "rm_open_closed",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_open_closed",
  "type": "Remark",
  "number": "1.10.9",
  "title": "Open and closed maps.",
  "body": " Open and closed maps   Don't be mislead by into thinking that being an open continuous map is equivalent to being a closed continuous map; we need the additional assumption of invertibility to guarantee equivalence. As an example, consider any constant function from to itself: this is clearly continuous and closed, but not open.   "
},
{
  "id": "d_topological_properties",
  "level": "2",
  "url": "s_homeomorphisms.html#d_topological_properties",
  "type": "Definition",
  "number": "1.10.10",
  "title": "Topological properties.",
  "body": " Topological properties   Let be a property that is either satisfied or not satisfied by any given topological space. We say is a topological property if it is invariant under homeomorphisms: , if and are homeomorphic, then satisfies if and only if satisfies .   "
},
{
  "id": "eg_topological_props",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_topological_props",
  "type": "Example",
  "number": "1.10.11",
  "title": "Topological properties.",
  "body": " Topological properties   It is easy to see that the properties of being discrete, , Hausdorff, or a metric space are topological.   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "s_homeomorphisms.html#example-43",
  "type": "Example",
  "number": "1.10.12",
  "title": "Continuous bijection onto circle.",
  "body": " Continuous bijection onto circle   Let and , and equip each set with the subspace topology inherited from (resp. ) with its Euclidean topology.  Prove: the function defined as is continuous and invertible, but not a homeomorphism.    Recall first that on the product topology, Euclidean metric topology, and box topology are all equal. Since and are continuous, it follows from that the map is continuous. Next, since , where , it follows that is continuous: indeed, for any open set , we have for some open , and , which is open since is continuous.  The usual trigonometric arguments show that is injective and surjective. However, is not open, and hence not a homeomorphism. Indeed, let , which is open in . The image is easily seen to be the upper half of the circle minus the point : in particular, all points have nonnegative -coordinates. On the other hand, we have and with respect to the subspace topology on any open set containing contains elements of whose -coordinate is negative. It follows that is not open.   "
},
{
  "id": "top_eg_coproduct",
  "level": "2",
  "url": "s_homeomorphisms.html#top_eg_coproduct",
  "type": "Topological specimen",
  "number": "12",
  "title": "Coproduct space.",
  "body": " Coproduct space  Let be a collection of topological spaces, let be the disjoint union of the , and let be the the inclusion maps identifying each with a subset of . The coproduct topology on is the topology generated by the basis defined as follows: . We call together with the topology the coproduct topology of the . With respect to this topology, each injection is continuous.  "
},
{
  "id": "th_coproduct_universal_prop",
  "level": "2",
  "url": "s_homeomorphisms.html#th_coproduct_universal_prop",
  "type": "Theorem",
  "number": "1.10.13",
  "title": "Universal property of coproduct space.",
  "body": " Universal property of coproduct space   Let be a collection of topological spaces, and let be their coproduct. For each let be the inclusion map identifying with a subset of .    Coproduct mapping property  Given any topological space and any collection of continuous maps , there is a unique continuous map satisfying for all .  In other words, specifying a continuous map out from to is equivalent to specifying continuous maps for all .    Unique up to homeomorphism  If is any other topological space equipped with continuous maps , and if the coproduct mapping property (1) is satisfied with replacing and replacing , then is homeomorphic to .  In other words, up to homeomorphism, the coproduct mapping property uniquely characterizes the product space.      Mimic the proof of step by step.   "
},
{
  "id": "s_quotients",
  "level": "1",
  "url": "s_quotients.html",
  "type": "Section",
  "number": "1.11",
  "title": "Quotients",
  "body": " Quotients       Quotient space  Let be a topological space, an equivalence relation on , the set of equivalence classes of , and the map sending to its equivalence class . The set is a topology on called the quotient topology . The map is a quotient map : that is, it is surjective and satisfies is open if and only if is open.   That is a topology follows easily from properties of preimages of sets; and it satisfies the quotient map properties essentially by definition.      For each quotient space description give an explicit description of the equivalence classes and identify (without proof) what familiar space the quotient might be homeomorphic to.     , obtained by identifying and      , , where if and only if for some      , obtained by identifying and for all      , obtained by identifying and for all and all and for .            Let and be topological spaces. A function is a quotient map if it satisfies the following properties:    is surjective;     is open if and only if is open.   It follows immediately from the definition that a quotient map is continuous.     Saturated sets   Let . A set is saturated with respect to if . Equivalently, is saturated if if whenever we have .     Quotient map properties     Let be a continuous surjective function. The following statements are equivalent.    is a quotient map.     is open for all open saturated sets .     is closed for all closed saturated subsets .       Let be continuous and surjective. If is open or closed, then it is a quotient map.    The composition of two quotient maps is a quotient map.     Statement (3) is straightforward. Statement (2) follows easily from (1) using equivalent statements (b) and (c), respectively.   Proof of (1)  We prove and .   . Assume is a quotient map. Let be open and saturated. Since is a quotient map, to show is open, it is enough to show is open. I claim , whence the claim follows. In general for any function of sets we have . (Check for yourself.) Since is saturated, the reverse inclusion also holds. Indeed, if , then and thus for some ; since is saturated, we have .   . Assume be open for . We wish to show that is open in . First observe that is saturated: if , then . Since satisfies and is an open saturated set, we have open. I claim , showing is open. In general we always have for any function of sets. For the other inclusion, given , there is an such that ; then and , showing .   . Let be a saturated closed map. First I claim that the open set is saturated. To see why, suppose for some . Since and is saturated, we must have . Thus , as desired. Next, I claim . We have already seen that if , then , and hence . This proves . For the other inclusion, given any , by surjectivity there is some such that ; since we must have ; thus . This proves . Since satisfies (b), is open. We conclude that is closed, as desired.   . This argument is essentially identical to the one above.     Mapping property of quotient maps   Let be a quotient map. Given any continuous function satisfying for all there is a unique continuous function satisfying .  Furthermore, the function is a projection map if and only if is a projection map.     Assume we have as described. Define via the following recipe: given , pick any such that (possible since is surjective); now define . Two comments:   To make sure as described is well-defined, we must make sure that the definition of does not depend on the choice of involve: , if you happen to pick another such that , we must make sure that . This is precisely what is guaranteed by the condition that .    Since we want , this definition of is forced upon us: given , we must have . Thus is unique.   Now we must show is continuous. We must show, given any open the set is open. To do so we use the fact that is a quotient map: that is, we need only show that is open in . But we have since . Since is continuous, we conclude that is open, as desired.  Lastly, we look at when is a quotient map. If is a quotient map, then so is the composition by statement (3) of . Assume is a quotient map. Since is surjective and , it follows that must be surjective. Now suppose is open in . Since is continuous, is open in . As we saw above, , which is a saturated open set of . Since is a quotient map, the set is open. But again, because is surejective, we have .     Fibers of maps   For any function between sets and element , we call the fiber of lying over . We say a function  agrees on fibers of if .     Mapping property of quotients   Let be the quotient space of by the equivalence relation , and let be the corresponding quotient map. Let be a continuous function that agrees on fibers of ( , ).   There is a unique continuous function satisfying ; and is a quotient map if and only if is a quotient map.       The function is a homeomorphism if and only if is a quotient map and satisfies for all .         The statement is a direct consequence of by setting and , and understanding that the implication is equivalent to .    The condition guarantees that the function is injective. The condition of being a quotient map is equivalent to being a quotient map according to . Thus the two conditions taken together are equivalent to being a bijective quotient map. This in turn is equivalent to being a homeomorphism by equivalent statement 1.b of , since all subsets of are saturated with respect to an invertible function .       Factoring maps through a quotient   Let be a surjective continuous map, and let be the quotient obtained from by treating each fiber , , as a single point: , the equivalence relation is .    There is a unique bijective continuous function satisfying .    The function is a homeomorphism if and only if is a quotient map.    If is Hausdorff, then is Hausdorff.      With the exception of (3), this corollary follows essentially directly from . Statement (3) follows directly from (1). In fact, more generally, if is a bijective continuous map, and is Hausdorff, then is Hausdorff.      The circle as a quotient space   Let denote the quotient obtained from after identifying and , and let denote the quotient of by the equivalence relation if and only if for some . Prove that is homeomorphic to .    Prove:     Prove: .    Note: once we have some notions about compactness under our belt it will be easy to show directly that . Part (2) is a workaround for the time being.      Consider the map defined by composition   where is the quotient map from to . It is easy to see that is surjective and satisfies if and only if or . From we conclude that gives rise to a bijective continuous function . Concretely, takes an equivalence class and maps it to the equivalence class in . Furthermore, to show is a homeomorphism it is enough to prove that is a quotient map. In fact, we can show that is a closed map. Take a closed set . To show its image is closed in , we need only show, using the fact that is a quotient map, that is closed in . We have . This set is the result of starting with our original closed set and taking the union of translated copies of the form , where . It is easy to see that each translate is closed; since furthermore , it follows that the union is also closed. I'll leave the details to you.    Let be the quotient map. Consider the diagram   where . It is easy to see that is continuous, surjective, and satisfies for some . It follows from that the map is bijective and continuous. Furthermore, by the same result, we can show is a homeomorphism as long as we can show is a quotient map. I'll show that in fact is open, and hence a projection map.  To this end let be any open set, and let , so that for some . We will find an open interval satisfying such that is open. Since and was arbitrary, this will show that is open.  Let . Since we cannot have , we have four cases: or or or . I will treat the first case; my argument is easily adapted to the other cases. Assume . Since the set is open in , we can find an open interval contained in such : , all points in lie in the the upper half plane. Elementary trigonometric properties tell us that the function is strictly decreasing on , and hence that is the open interval . It is now easy to see that , which is open.      "
},
{
  "id": "top_eg_quotient_space",
  "level": "2",
  "url": "s_quotients.html#top_eg_quotient_space",
  "type": "Topological specimen",
  "number": "13",
  "title": "Quotient space.",
  "body": " Quotient space  Let be a topological space, an equivalence relation on , the set of equivalence classes of , and the map sending to its equivalence class . The set is a topology on called the quotient topology . The map is a quotient map : that is, it is surjective and satisfies is open if and only if is open.   That is a topology follows easily from properties of preimages of sets; and it satisfies the quotient map properties essentially by definition.   "
},
{
  "id": "eg_quotient_no_proof",
  "level": "2",
  "url": "s_quotients.html#eg_quotient_no_proof",
  "type": "Example",
  "number": "1.11.1",
  "title": "",
  "body": "  For each quotient space description give an explicit description of the equivalence classes and identify (without proof) what familiar space the quotient might be homeomorphic to.     , obtained by identifying and      , , where if and only if for some      , obtained by identifying and for all      , obtained by identifying and for all and all and for .         "
},
{
  "id": "d_quotient_map",
  "level": "2",
  "url": "s_quotients.html#d_quotient_map",
  "type": "Definition",
  "number": "1.11.2",
  "title": "",
  "body": "  Let and be topological spaces. A function is a quotient map if it satisfies the following properties:    is surjective;     is open if and only if is open.   It follows immediately from the definition that a quotient map is continuous.   "
},
{
  "id": "d_saturated",
  "level": "2",
  "url": "s_quotients.html#d_saturated",
  "type": "Definition",
  "number": "1.11.3",
  "title": "Saturated sets.",
  "body": " Saturated sets   Let . A set is saturated with respect to if . Equivalently, is saturated if if whenever we have .   "
},
{
  "id": "th_quotientmap_props",
  "level": "2",
  "url": "s_quotients.html#th_quotientmap_props",
  "type": "Theorem",
  "number": "1.11.4",
  "title": "Quotient map properties.",
  "body": " Quotient map properties     Let be a continuous surjective function. The following statements are equivalent.    is a quotient map.     is open for all open saturated sets .     is closed for all closed saturated subsets .       Let be continuous and surjective. If is open or closed, then it is a quotient map.    The composition of two quotient maps is a quotient map.     Statement (3) is straightforward. Statement (2) follows easily from (1) using equivalent statements (b) and (c), respectively.   Proof of (1)  We prove and .   . Assume is a quotient map. Let be open and saturated. Since is a quotient map, to show is open, it is enough to show is open. I claim , whence the claim follows. In general for any function of sets we have . (Check for yourself.) Since is saturated, the reverse inclusion also holds. Indeed, if , then and thus for some ; since is saturated, we have .   . Assume be open for . We wish to show that is open in . First observe that is saturated: if , then . Since satisfies and is an open saturated set, we have open. I claim , showing is open. In general we always have for any function of sets. For the other inclusion, given , there is an such that ; then and , showing .   . Let be a saturated closed map. First I claim that the open set is saturated. To see why, suppose for some . Since and is saturated, we must have . Thus , as desired. Next, I claim . We have already seen that if , then , and hence . This proves . For the other inclusion, given any , by surjectivity there is some such that ; since we must have ; thus . This proves . Since satisfies (b), is open. We conclude that is closed, as desired.   . This argument is essentially identical to the one above.   "
},
{
  "id": "th_quotientmap_mappingprop",
  "level": "2",
  "url": "s_quotients.html#th_quotientmap_mappingprop",
  "type": "Theorem",
  "number": "1.11.5",
  "title": "Mapping property of quotient maps.",
  "body": " Mapping property of quotient maps   Let be a quotient map. Given any continuous function satisfying for all there is a unique continuous function satisfying .  Furthermore, the function is a projection map if and only if is a projection map.     Assume we have as described. Define via the following recipe: given , pick any such that (possible since is surjective); now define . Two comments:   To make sure as described is well-defined, we must make sure that the definition of does not depend on the choice of involve: , if you happen to pick another such that , we must make sure that . This is precisely what is guaranteed by the condition that .    Since we want , this definition of is forced upon us: given , we must have . Thus is unique.   Now we must show is continuous. We must show, given any open the set is open. To do so we use the fact that is a quotient map: that is, we need only show that is open in . But we have since . Since is continuous, we conclude that is open, as desired.  Lastly, we look at when is a quotient map. If is a quotient map, then so is the composition by statement (3) of . Assume is a quotient map. Since is surjective and , it follows that must be surjective. Now suppose is open in . Since is continuous, is open in . As we saw above, , which is a saturated open set of . Since is a quotient map, the set is open. But again, because is surejective, we have .   "
},
{
  "id": "d_fibers_agree",
  "level": "2",
  "url": "s_quotients.html#d_fibers_agree",
  "type": "Definition",
  "number": "1.11.6",
  "title": "Fibers of maps.",
  "body": " Fibers of maps   For any function between sets and element , we call the fiber of lying over . We say a function  agrees on fibers of if .   "
},
{
  "id": "cor_quotientspace_props",
  "level": "2",
  "url": "s_quotients.html#cor_quotientspace_props",
  "type": "Corollary",
  "number": "1.11.7",
  "title": "Mapping property of quotients.",
  "body": " Mapping property of quotients   Let be the quotient space of by the equivalence relation , and let be the corresponding quotient map. Let be a continuous function that agrees on fibers of ( , ).   There is a unique continuous function satisfying ; and is a quotient map if and only if is a quotient map.       The function is a homeomorphism if and only if is a quotient map and satisfies for all .         The statement is a direct consequence of by setting and , and understanding that the implication is equivalent to .    The condition guarantees that the function is injective. The condition of being a quotient map is equivalent to being a quotient map according to . Thus the two conditions taken together are equivalent to being a bijective quotient map. This in turn is equivalent to being a homeomorphism by equivalent statement 1.b of , since all subsets of are saturated with respect to an invertible function .     "
},
{
  "id": "cor_quotient_factor",
  "level": "2",
  "url": "s_quotients.html#cor_quotient_factor",
  "type": "Corollary",
  "number": "1.11.8",
  "title": "Factoring maps through a quotient.",
  "body": " Factoring maps through a quotient   Let be a surjective continuous map, and let be the quotient obtained from by treating each fiber , , as a single point: , the equivalence relation is .    There is a unique bijective continuous function satisfying .    The function is a homeomorphism if and only if is a quotient map.    If is Hausdorff, then is Hausdorff.      With the exception of (3), this corollary follows essentially directly from . Statement (3) follows directly from (1). In fact, more generally, if is a bijective continuous map, and is Hausdorff, then is Hausdorff.   "
},
{
  "id": "eg_RmodZ",
  "level": "2",
  "url": "s_quotients.html#eg_RmodZ",
  "type": "Example",
  "number": "1.11.9",
  "title": "The circle as a quotient space.",
  "body": " The circle as a quotient space   Let denote the quotient obtained from after identifying and , and let denote the quotient of by the equivalence relation if and only if for some . Prove that is homeomorphic to .    Prove:     Prove: .    Note: once we have some notions about compactness under our belt it will be easy to show directly that . Part (2) is a workaround for the time being.      Consider the map defined by composition   where is the quotient map from to . It is easy to see that is surjective and satisfies if and only if or . From we conclude that gives rise to a bijective continuous function . Concretely, takes an equivalence class and maps it to the equivalence class in . Furthermore, to show is a homeomorphism it is enough to prove that is a quotient map. In fact, we can show that is a closed map. Take a closed set . To show its image is closed in , we need only show, using the fact that is a quotient map, that is closed in . We have . This set is the result of starting with our original closed set and taking the union of translated copies of the form , where . It is easy to see that each translate is closed; since furthermore , it follows that the union is also closed. I'll leave the details to you.    Let be the quotient map. Consider the diagram   where . It is easy to see that is continuous, surjective, and satisfies for some . It follows from that the map is bijective and continuous. Furthermore, by the same result, we can show is a homeomorphism as long as we can show is a quotient map. I'll show that in fact is open, and hence a projection map.  To this end let be any open set, and let , so that for some . We will find an open interval satisfying such that is open. Since and was arbitrary, this will show that is open.  Let . Since we cannot have , we have four cases: or or or . I will treat the first case; my argument is easily adapted to the other cases. Assume . Since the set is open in , we can find an open interval contained in such : , all points in lie in the the upper half plane. Elementary trigonometric properties tell us that the function is strictly decreasing on , and hence that is the open interval . It is now easy to see that , which is open.     "
},
{
  "id": "s_connected1",
  "level": "1",
  "url": "s_connected1.html",
  "type": "Section",
  "number": "1.12",
  "title": "Connected spaces",
  "body": " Connected spaces    A separation of a topological space is a pair of disjoint nonempty open sets satisfying . The space is connected it it admits no separation, and disconnected otherwise.  A subset is connected (resp., disconnected ) if it is connected (resp., disconnected) with respect to the subspace topology.     Examples     If , then is not connected with respect to the discrete topology.    If is infinite, then is connected with respect to the cofinite topology.    Let be the graph of the equation and let be the graph of the equation . The subset is disconnected.     is not connected. In fact if is any set that is not an interval, then is not connected. (Define an interval of to be a set satisfying the following property: if and , then . This definition includes singletons and the empty set as sort of degenerate intervals.)           Connected subsets of   Consider with the standard topology. For all subsets we have .    See Munkres.     Connectedness equivalences   The following statements are equivalent for a topological space .     is connected.    There is no pair of disjoint nonempty closed sets satisfying .    If is open and closed, then .    There is no pair of nonempty disjoint sets , neither of which contains limit points of the other, satisfying .       . It is clear that a separation by open sets is the same thing as a separation as described in (2), since and are both open and closed. Similarly, we see that there is a separation if and only if and only if there is a nonempty open set whose complement is open and nonempty, if and only if there is a nontrival that is open and closed.   . This equivalence follows from the observation that we have with as described in (4) if and only if and , if and only if and are disjoint and closed.     Connectedness and subspaces   Let be a topological space.   If is connected and is a separation of , then or .    If is a collection of connected subspaces of and , then is connected.    If is connected, then any satisfying is connected.     Let be a connected subspace of . It is a separation of , then or .        Given a separation , we have , where . Since are disjoint open subsets of the subspace , we have or . It follows that or .    Let be disjoint open sets satisfying . Take any . We may assume without loss of generality that . Now since is connected for all we must have or by (1). Since and , it follows that for all . Thus . We conclude that . Thus is connected.    Assume , where is connected. Let , where and are disjoint closed sets in . By (1) we have or . Assume without loss of generality that . Since is closed, the closure of in is contained in . But as we have seen in an earlier homework, the closure of in is . Thus , or equivalently, . We conclude that is connected.       Connectedness and continuity   If is continuous and is connected, then is connected.    We identify with the map obtained by restricting the codomain, which is continuous and surjective. If are disjoint open sets satisfying , then we have . Since the sets are open and disjoint, we have or . Since is surjective, we have for . It follows that or . We conclude is connected.     Graphs of continuous functions   Let and let , the graph of . If is continuous, then is connected.    Define as . Since the two component functions and are continuous, so is . From , we conclude that is continuous.      A product space (with product topology) is connected if and only if is connected for all .    Although the statement is indeed true for arbitrary products, we prove it only for finite and countably infinite products.   Finite products  Using induction it suffices to show that if are connected, then is connected. First, choose any and note that the subspace , being homeomorphic to , is connected. Similarly, for any , the subspace is connected. It follows from (2) of that the set is connected for any . Lastly, since for any , the union is connected. But this union is itself.    Countable product  Let where is connected for all . Fix any element . For each the set , being homeomorphic to a finite product of connected spaces, is connected. Since for all , we conclude that is connected.  Next, I claim that . Indeed, given any and any open base element containing , we have . Since connectedness is preserved under closure, we conclude that is connected.     "
},
{
  "id": "d_connected_space",
  "level": "2",
  "url": "s_connected1.html#d_connected_space",
  "type": "Definition",
  "number": "1.12.1",
  "title": "",
  "body": "  A separation of a topological space is a pair of disjoint nonempty open sets satisfying . The space is connected it it admits no separation, and disconnected otherwise.  A subset is connected (resp., disconnected ) if it is connected (resp., disconnected) with respect to the subspace topology.   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "s_connected1.html#example-46",
  "type": "Example",
  "number": "1.12.2",
  "title": "Examples.",
  "body": " Examples     If , then is not connected with respect to the discrete topology.    If is infinite, then is connected with respect to the cofinite topology.    Let be the graph of the equation and let be the graph of the equation . The subset is disconnected.     is not connected. In fact if is any set that is not an interval, then is not connected. (Define an interval of to be a set satisfying the following property: if and , then . This definition includes singletons and the empty set as sort of degenerate intervals.)         "
},
{
  "id": "th_connected_intervals",
  "level": "2",
  "url": "s_connected1.html#th_connected_intervals",
  "type": "Theorem",
  "number": "1.12.3",
  "title": "Connected subsets of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Connected subsets of   Consider with the standard topology. For all subsets we have .    See Munkres.   "
},
{
  "id": "th_connected_equiv",
  "level": "2",
  "url": "s_connected1.html#th_connected_equiv",
  "type": "Theorem",
  "number": "1.12.4",
  "title": "Connectedness equivalences.",
  "body": " Connectedness equivalences   The following statements are equivalent for a topological space .     is connected.    There is no pair of disjoint nonempty closed sets satisfying .    If is open and closed, then .    There is no pair of nonempty disjoint sets , neither of which contains limit points of the other, satisfying .       . It is clear that a separation by open sets is the same thing as a separation as described in (2), since and are both open and closed. Similarly, we see that there is a separation if and only if and only if there is a nonempty open set whose complement is open and nonempty, if and only if there is a nontrival that is open and closed.   . This equivalence follows from the observation that we have with as described in (4) if and only if and , if and only if and are disjoint and closed.   "
},
{
  "id": "th_connected_subspace",
  "level": "2",
  "url": "s_connected1.html#th_connected_subspace",
  "type": "Theorem",
  "number": "1.12.5",
  "title": "Connectedness and subspaces.",
  "body": " Connectedness and subspaces   Let be a topological space.   If is connected and is a separation of , then or .    If is a collection of connected subspaces of and , then is connected.    If is connected, then any satisfying is connected.     Let be a connected subspace of . It is a separation of , then or .   "
},
{
  "id": "proof-45",
  "level": "2",
  "url": "s_connected1.html#proof-45",
  "type": "Proof",
  "number": "1.12.1",
  "title": "",
  "body": "    Given a separation , we have , where . Since are disjoint open subsets of the subspace , we have or . It follows that or .    Let be disjoint open sets satisfying . Take any . We may assume without loss of generality that . Now since is connected for all we must have or by (1). Since and , it follows that for all . Thus . We conclude that . Thus is connected.    Assume , where is connected. Let , where and are disjoint closed sets in . By (1) we have or . Assume without loss of generality that . Since is closed, the closure of in is contained in . But as we have seen in an earlier homework, the closure of in is . Thus , or equivalently, . We conclude that is connected.     "
},
{
  "id": "th_connected_continuous",
  "level": "2",
  "url": "s_connected1.html#th_connected_continuous",
  "type": "Theorem",
  "number": "1.12.6",
  "title": "Connectedness and continuity.",
  "body": " Connectedness and continuity   If is continuous and is connected, then is connected.    We identify with the map obtained by restricting the codomain, which is continuous and surjective. If are disjoint open sets satisfying , then we have . Since the sets are open and disjoint, we have or . Since is surjective, we have for . It follows that or . We conclude is connected.   "
},
{
  "id": "cor_graph_connected",
  "level": "2",
  "url": "s_connected1.html#cor_graph_connected",
  "type": "Corollary",
  "number": "1.12.7",
  "title": "Graphs of continuous functions.",
  "body": " Graphs of continuous functions   Let and let , the graph of . If is continuous, then is connected.    Define as . Since the two component functions and are continuous, so is . From , we conclude that is continuous.   "
},
{
  "id": "th_connected_products",
  "level": "2",
  "url": "s_connected1.html#th_connected_products",
  "type": "Theorem",
  "number": "1.12.8",
  "title": "",
  "body": "  A product space (with product topology) is connected if and only if is connected for all .    Although the statement is indeed true for arbitrary products, we prove it only for finite and countably infinite products.   Finite products  Using induction it suffices to show that if are connected, then is connected. First, choose any and note that the subspace , being homeomorphic to , is connected. Similarly, for any , the subspace is connected. It follows from (2) of that the set is connected for any . Lastly, since for any , the union is connected. But this union is itself.    Countable product  Let where is connected for all . Fix any element . For each the set , being homeomorphic to a finite product of connected spaces, is connected. Since for all , we conclude that is connected.  Next, I claim that . Indeed, given any and any open base element containing , we have . Since connectedness is preserved under closure, we conclude that is connected.    "
},
{
  "id": "s_connected_path",
  "level": "1",
  "url": "s_connected_path.html",
  "type": "Section",
  "number": "1.13",
  "title": "Path-connected spaces",
  "body": " Path-connected spaces   Path   A path in (or to) a topological space is a continuous function , where is a closed interval. We call the start point (or initial point ) and the end point (or terminal point ) of the path .     Path-connected space   Let be a topological space. Two elements are connected by a path in if there is a path such that and . The space is path connected if any two elements of are connected by a path.     Path-connected implies connected   If is path connected, then is connected. Using logical shorthand:     Assume by contradiction that is a separation of . We can find points . Let be a path connecting . By , the image is connected. By we must have or . This contradicts the fact that and . Thus there can be no separation of , and we conclude that it is connected.     Path-connectedness and continuity   If is continuous and is path connected, then is path connected.    Given and , let be a path connecting and . The composition is then a path connecting and .     Balls in   Let be Euclidean -space. For all and any , the open ball is connected, as is the closed ball defined as     It is easy to see that the straight line path defined as is a continuous function connecting any two points in . For our current purposes, we wish to show that if , then so is , for any . To this end, note that . This proves that the open ball is path connected, and hence connected. Next, it is easy to see that the closed ball is in fact the closure of the open ball. Since connectedness is preserved under closure, we conclude that the closed ball is connected.     Punctured Euclidean space :   Let be Euclidean -space, where . The subspace is connected.    Take any . If the two vectors are not scalar multiples of one another, then the straight line path connecting them is guaranteed to lie in , using a linear independence argument. If , then since , we can find a vector that is not a scalar multiple of either vector. We can then construct a polygonal path lieing in that first connects to via a straight line path, and then connects to via a straight line path.     for   Prove: if , then there is no homeomorphism from to .    Assume by contradiction that is a homeomorphism for some . It follows that the restriction is a homeomorphism. This a contradiction since is not connected ( is open and closed in ), but is connected.     The -sphere   Fix . The -sphere is defined as . Prove: is connected for all .    Fix and consider the map defined as , where as usual . This map is continuous (homework exercise!) and surjective. Since is connected, we see that is the image of a connected set under a continuous function, hence connected.     Topologist's sine curve  Define as for all . Let , the graph of .    The set is connected.    The set is not path connected. More specifically, we can show that and are not connected by a path in .         Since is connected and is continuous, its graph is connected by . Since closure preserves connectedness, we conclude that is connected.    Suppose is a path connecting and . We can write where the component functions are both continuous. The set is closed, since is continuous. Set (guaranteed to exist since is closed), and let . Note that since , and that for all we have and hence . Take . We will show that there is no -ball around such that , contradicting the continuity of .  For any any , is an interval since is continuous and is connected. This means that contains an interval of the form for some . Due to the highly oscillatory nature of , we can find points satisfying . Since these points are in the image of , we have and for some . But then . Since , we cannot have , and thus , as claimed.       "
},
{
  "id": "d_path",
  "level": "2",
  "url": "s_connected_path.html#d_path",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Path.",
  "body": " Path   A path in (or to) a topological space is a continuous function , where is a closed interval. We call the start point (or initial point ) and the end point (or terminal point ) of the path .   "
},
{
  "id": "d_path_connected",
  "level": "2",
  "url": "s_connected_path.html#d_path_connected",
  "type": "Definition",
  "number": "1.13.2",
  "title": "Path-connected space.",
  "body": " Path-connected space   Let be a topological space. Two elements are connected by a path in if there is a path such that and . The space is path connected if any two elements of are connected by a path.   "
},
{
  "id": "th_path_connected",
  "level": "2",
  "url": "s_connected_path.html#th_path_connected",
  "type": "Theorem",
  "number": "1.13.3",
  "title": "Path-connected implies connected.",
  "body": " Path-connected implies connected   If is path connected, then is connected. Using logical shorthand:     Assume by contradiction that is a separation of . We can find points . Let be a path connecting . By , the image is connected. By we must have or . This contradicts the fact that and . Thus there can be no separation of , and we conclude that it is connected.   "
},
{
  "id": "th_path_connected_continuous",
  "level": "2",
  "url": "s_connected_path.html#th_path_connected_continuous",
  "type": "Theorem",
  "number": "1.13.4",
  "title": "Path-connectedness and continuity.",
  "body": " Path-connectedness and continuity   If is continuous and is path connected, then is path connected.    Given and , let be a path connecting and . The composition is then a path connecting and .   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "s_connected_path.html#example-47",
  "type": "Example",
  "number": "1.13.5",
  "title": "Balls in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Balls in   Let be Euclidean -space. For all and any , the open ball is connected, as is the closed ball defined as     It is easy to see that the straight line path defined as is a continuous function connecting any two points in . For our current purposes, we wish to show that if , then so is , for any . To this end, note that . This proves that the open ball is path connected, and hence connected. Next, it is easy to see that the closed ball is in fact the closure of the open ball. Since connectedness is preserved under closure, we conclude that the closed ball is connected.   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "s_connected_path.html#example-48",
  "type": "Example",
  "number": "1.13.6",
  "title": "Punctured Euclidean space <span class=\"process-math\">\\(\\R^n-\\{\\boldzero\\}\\text{:}\\)<\/span> <span class=\"process-math\">\\(n\\geq 2\\)<\/span>.",
  "body": " Punctured Euclidean space :   Let be Euclidean -space, where . The subspace is connected.    Take any . If the two vectors are not scalar multiples of one another, then the straight line path connecting them is guaranteed to lie in , using a linear independence argument. If , then since , we can find a vector that is not a scalar multiple of either vector. We can then construct a polygonal path lieing in that first connects to via a straight line path, and then connects to via a straight line path.   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "s_connected_path.html#example-49",
  "type": "Example",
  "number": "1.13.7",
  "title": "<span class=\"process-math\">\\(\\R\\not\\cong \\R^n\\)<\/span> for <span class=\"process-math\">\\(n\\geq 2\\)<\/span>.",
  "body": " for   Prove: if , then there is no homeomorphism from to .    Assume by contradiction that is a homeomorphism for some . It follows that the restriction is a homeomorphism. This a contradiction since is not connected ( is open and closed in ), but is connected.   "
},
{
  "id": "example-50",
  "level": "2",
  "url": "s_connected_path.html#example-50",
  "type": "Example",
  "number": "1.13.8",
  "title": "The <span class=\"process-math\">\\(n\\)<\/span>-sphere.",
  "body": " The -sphere   Fix . The -sphere is defined as . Prove: is connected for all .    Fix and consider the map defined as , where as usual . This map is continuous (homework exercise!) and surjective. Since is connected, we see that is the image of a connected set under a continuous function, hence connected.   "
},
{
  "id": "top_eg_topologist_sine_curve",
  "level": "2",
  "url": "s_connected_path.html#top_eg_topologist_sine_curve",
  "type": "Topological specimen",
  "number": "14",
  "title": "Topologist's sine curve.",
  "body": " Topologist's sine curve  Define as for all . Let , the graph of .    The set is connected.    The set is not path connected. More specifically, we can show that and are not connected by a path in .         Since is connected and is continuous, its graph is connected by . Since closure preserves connectedness, we conclude that is connected.    Suppose is a path connecting and . We can write where the component functions are both continuous. The set is closed, since is continuous. Set (guaranteed to exist since is closed), and let . Note that since , and that for all we have and hence . Take . We will show that there is no -ball around such that , contradicting the continuity of .  For any any , is an interval since is continuous and is connected. This means that contains an interval of the form for some . Due to the highly oscillatory nature of , we can find points satisfying . Since these points are in the image of , we have and for some . But then . Since , we cannot have , and thus , as claimed.      "
},
{
  "id": "s_connected_components",
  "level": "1",
  "url": "s_connected_components.html",
  "type": "Section",
  "number": "1.14",
  "title": "Connected components and locally connected spaces",
  "body": " Connected components and locally connected spaces   Connected components   Let be a topological space. A subset is maximally connected (resp., maximally path connected ) if is connected (resp. path connected), and if for all connected (resp. path connected) sets , if , then . A connected component (resp., path-connected component ) of is a maximally connected (resp. path connected) subset of .      Let be a topological space.   All connected components of are closed. (This is not necessarily the case for path-connected components.)    If is connected (resp. path connected) and is a connected component (resp. path connected component) of , then either or .    The set of all connected components (resp. path-connected components) of forms a partition of . In other words, every element of lies in a component (connected or path connected), and any two distinct components are disjoint.    Each connected component of is a partition of path-connected components.          Let be a connected component. Since and is connected, we have . Thus is closed.    Suppose is connected. If , then is connected by (2) of . Since is maximally connected, we have . Thus . A similar argument applies to path connected components.    Let be connected components. By the previous result, since is maximally connected, if , then . Since is maximally connected, . This proves that any two distinct connected components are disjoint.  Next given any , let be the set of all connected sets containing . Note that is nonempty since . The set is easily seen to be a connected component containing . Thus every element of is contained in a connected component.  Again, the argument for path connected components is very similar.    For each let denote the (unique) connected component containing , and let denote the (unique) path connected component containing . Let be a connected component of . For any we have ; since is path connected, it is connected, and hence by (1) above. It follows that is a partition of by path connected components.        Locally connected space   A topological space is locally connected (resp. locally path connected ) at a point if for all open sets containing , there is an open connected (resp. open path connected set) such that and . The space is locally connected (resp., locally path connected ) if it is locally connected (resp., locally path connected) at all .     Connected does not imply locally connected  Somewhat curiously, a space being connected does not necessarily imply that the space is locally connected. For example, the topologist's sine curve  is connected, but not locally connected. For example, take the point and the open set . Graphically, it is easy to see that has a connected component partition consisting of and infinitely many connected segments of the graph of (one segment for each interval of the form that lies in ). Any open connected set containing would have to lie in the connected component ; but this is impossible since does not contain any open sets!   "
},
{
  "id": "d_connected_components",
  "level": "2",
  "url": "s_connected_components.html#d_connected_components",
  "type": "Definition",
  "number": "1.14.1",
  "title": "Connected components.",
  "body": " Connected components   Let be a topological space. A subset is maximally connected (resp., maximally path connected ) if is connected (resp. path connected), and if for all connected (resp. path connected) sets , if , then . A connected component (resp., path-connected component ) of is a maximally connected (resp. path connected) subset of .   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "s_connected_components.html#thm-",
  "type": "Theorem",
  "number": "1.14.2",
  "title": "",
  "body": "  Let be a topological space.   All connected components of are closed. (This is not necessarily the case for path-connected components.)    If is connected (resp. path connected) and is a connected component (resp. path connected component) of , then either or .    The set of all connected components (resp. path-connected components) of forms a partition of . In other words, every element of lies in a component (connected or path connected), and any two distinct components are disjoint.    Each connected component of is a partition of path-connected components.          Let be a connected component. Since and is connected, we have . Thus is closed.    Suppose is connected. If , then is connected by (2) of . Since is maximally connected, we have . Thus . A similar argument applies to path connected components.    Let be connected components. By the previous result, since is maximally connected, if , then . Since is maximally connected, . This proves that any two distinct connected components are disjoint.  Next given any , let be the set of all connected sets containing . Note that is nonempty since . The set is easily seen to be a connected component containing . Thus every element of is contained in a connected component.  Again, the argument for path connected components is very similar.    For each let denote the (unique) connected component containing , and let denote the (unique) path connected component containing . Let be a connected component of . For any we have ; since is path connected, it is connected, and hence by (1) above. It follows that is a partition of by path connected components.      "
},
{
  "id": "d_locally_connected",
  "level": "2",
  "url": "s_connected_components.html#d_locally_connected",
  "type": "Definition",
  "number": "1.14.3",
  "title": "Locally connected space.",
  "body": " Locally connected space   A topological space is locally connected (resp. locally path connected ) at a point if for all open sets containing , there is an open connected (resp. open path connected set) such that and . The space is locally connected (resp., locally path connected ) if it is locally connected (resp., locally path connected) at all .   "
},
{
  "id": "rm_locally_connected",
  "level": "2",
  "url": "s_connected_components.html#rm_locally_connected",
  "type": "Remark",
  "number": "1.14.4",
  "title": "Connected does not imply locally connected.",
  "body": " Connected does not imply locally connected  Somewhat curiously, a space being connected does not necessarily imply that the space is locally connected. For example, the topologist's sine curve  is connected, but not locally connected. For example, take the point and the open set . Graphically, it is easy to see that has a connected component partition consisting of and infinitely many connected segments of the graph of (one segment for each interval of the form that lies in ). Any open connected set containing would have to lie in the connected component ; but this is impossible since does not contain any open sets!  "
},
{
  "id": "s_compact_def",
  "level": "1",
  "url": "s_compact_def.html",
  "type": "Section",
  "number": "1.15",
  "title": "Compact spaces",
  "body": " Compact spaces   Covering   Let be a subset of the topological space . A collection is a covering of if . As a shorthand, we will often say in this case that is a covering. Note in particular that a covering of itself is a collection of sets satisfying .  Given a property of subsets ( , open, closed, ), a covering is said to satisfy this property if does for all .     Compact space   A topological space is compact if every open covering of has a finite subcovering: , if is an open covering, then there is a finite set such that .  A subset is compact if it is compact with respect to the subspace topology. Equivalently, is compact if any covering by open sets of has a finite subcovering.     Compactness is a topological property  If is a homeomorphism, then is compact if and only if is compact. Indeed defines a bijection between open covers of and open covers of ; and furthermore, this maps finite subcovers of to finite subcovers of .    Elementary examples     Any finite set is compact.    Any space with the trivial topology is compact.    A discrete space is compact if and only if it is finite.     is not compact. Consequently, since compactness is a topological property ( , preserved by homeomorphisms), no open interval is compact.       is compact  Show that is a compact subset of .     Finite closed intervals are compact   Finite closed intervals are compact in .    Let be an open covering of . Define to be the set of all such that has a finite subcovering. Note that is nonempty, since clearly . I will show further that is open and closed in . Since is connected, it will follows that , and hence that has a finite subcovering, as desired.   is open  Suppose . By definition of there is a finite subcover . Without loss of generality, we may assume that . Since is open, we can find an such that . But then clearly for all , showing that admits a finite subcovering for all such , and hence that . This proves is open.    is closed  Take . Since is a cover of , we have for some . Since is open, we can find an such that . But then for all we have : indeed, if for such an we had a finite subcovering , then would be a finite subcovering of , contradicting the fact that .      Compact implies closed in Hausdorff spaces   Let be a compact subset of the topological space .    is closed.    Given any there are disjoint open sets such that and .       (1) follows directly from (2). To prove the latter, note that for each we can find disjoint open neighborhoods of and , respectively. Since is an open covering of , there is a finite subcovering . The open sets satisfy the desired conditions.     Compactness inherited by closed subspaces   Let be a closed subset of the topological space . If is compact, then is compact.    Let be an open covering of by open sets of . Since is closed, the collection is an open covering of .     Compactness preserved under continuous image   Let be a continuous function. If is compact, then is compact.    If is an open covering of , then is an open covering of . Since is compact, there is a finite subcover . It follows that is a finite subcover of our original covering .     Compactness and closed maps   Let be continuous. If is continuous and is Hausdorff, then is a closed map.   Let be closed. Since is compact, is compact. By , is compact. By , since is Hausdorff, is closed.    Compactness and homeomorphisms   Let be continuous and bijective. If is compact and is Hausdorff, then is a homeomorphism.    By , the map is closed, hence a homeomorphism.     Finite intersection property   A collection of subsets of satisfies the finite intersection property if every finite subcollection has non trivial intersection: , .      Let be a topological space. The following statements are equivalent.    is compact.    If is a collection of closed sets that satisfies the finite intersection property, then .        Nested closed sets in compact space   Let be a compact space. Given a nested sequence of nonempty closed subsets , we have .    "
},
{
  "id": "d_covering",
  "level": "2",
  "url": "s_compact_def.html#d_covering",
  "type": "Definition",
  "number": "1.15.1",
  "title": "Covering.",
  "body": " Covering   Let be a subset of the topological space . A collection is a covering of if . As a shorthand, we will often say in this case that is a covering. Note in particular that a covering of itself is a collection of sets satisfying .  Given a property of subsets ( , open, closed, ), a covering is said to satisfy this property if does for all .   "
},
{
  "id": "d_compact",
  "level": "2",
  "url": "s_compact_def.html#d_compact",
  "type": "Definition",
  "number": "1.15.2",
  "title": "Compact space.",
  "body": " Compact space   A topological space is compact if every open covering of has a finite subcovering: , if is an open covering, then there is a finite set such that .  A subset is compact if it is compact with respect to the subspace topology. Equivalently, is compact if any covering by open sets of has a finite subcovering.   "
},
{
  "id": "rm_compactness_topological",
  "level": "2",
  "url": "s_compact_def.html#rm_compactness_topological",
  "type": "Remark",
  "number": "1.15.3",
  "title": "Compactness is a topological property.",
  "body": " Compactness is a topological property  If is a homeomorphism, then is compact if and only if is compact. Indeed defines a bijection between open covers of and open covers of ; and furthermore, this maps finite subcovers of to finite subcovers of .  "
},
{
  "id": "eg_elementary_compact",
  "level": "2",
  "url": "s_compact_def.html#eg_elementary_compact",
  "type": "Example",
  "number": "1.15.4",
  "title": "Elementary examples.",
  "body": " Elementary examples     Any finite set is compact.    Any space with the trivial topology is compact.    A discrete space is compact if and only if it is finite.     is not compact. Consequently, since compactness is a topological property ( , preserved by homeomorphisms), no open interval is compact.     "
},
{
  "id": "eg_K_compact",
  "level": "2",
  "url": "s_compact_def.html#eg_K_compact",
  "type": "Example",
  "number": "1.15.5",
  "title": "<span class=\"process-math\">\\(K\\cup\\{0\\}\\)<\/span> is compact.",
  "body": " is compact  Show that is a compact subset of .   "
},
{
  "id": "th_compact_R",
  "level": "2",
  "url": "s_compact_def.html#th_compact_R",
  "type": "Theorem",
  "number": "1.15.6",
  "title": "Finite closed intervals are compact.",
  "body": " Finite closed intervals are compact   Finite closed intervals are compact in .    Let be an open covering of . Define to be the set of all such that has a finite subcovering. Note that is nonempty, since clearly . I will show further that is open and closed in . Since is connected, it will follows that , and hence that has a finite subcovering, as desired.   is open  Suppose . By definition of there is a finite subcover . Without loss of generality, we may assume that . Since is open, we can find an such that . But then clearly for all , showing that admits a finite subcovering for all such , and hence that . This proves is open.    is closed  Take . Since is a cover of , we have for some . Since is open, we can find an such that . But then for all we have : indeed, if for such an we had a finite subcovering , then would be a finite subcovering of , contradicting the fact that .    "
},
{
  "id": "th_compact_Haus_closed",
  "level": "2",
  "url": "s_compact_def.html#th_compact_Haus_closed",
  "type": "Theorem",
  "number": "1.15.7",
  "title": "Compact implies closed in Hausdorff spaces.",
  "body": " Compact implies closed in Hausdorff spaces   Let be a compact subset of the topological space .    is closed.    Given any there are disjoint open sets such that and .       (1) follows directly from (2). To prove the latter, note that for each we can find disjoint open neighborhoods of and , respectively. Since is an open covering of , there is a finite subcovering . The open sets satisfy the desired conditions.   "
},
{
  "id": "th_closed_in_compact",
  "level": "2",
  "url": "s_compact_def.html#th_closed_in_compact",
  "type": "Theorem",
  "number": "1.15.8",
  "title": "Compactness inherited by closed subspaces.",
  "body": " Compactness inherited by closed subspaces   Let be a closed subset of the topological space . If is compact, then is compact.    Let be an open covering of by open sets of . Since is closed, the collection is an open covering of .   "
},
{
  "id": "th_compactness_continuous",
  "level": "2",
  "url": "s_compact_def.html#th_compactness_continuous",
  "type": "Theorem",
  "number": "1.15.9",
  "title": "Compactness preserved under continuous image.",
  "body": " Compactness preserved under continuous image   Let be a continuous function. If is compact, then is compact.    If is an open covering of , then is an open covering of . Since is compact, there is a finite subcover . It follows that is a finite subcover of our original covering .   "
},
{
  "id": "th_compactness_closed_map",
  "level": "2",
  "url": "s_compact_def.html#th_compactness_closed_map",
  "type": "Theorem",
  "number": "1.15.10",
  "title": "Compactness and closed maps.",
  "body": " Compactness and closed maps   Let be continuous. If is continuous and is Hausdorff, then is a closed map.   Let be closed. Since is compact, is compact. By , is compact. By , since is Hausdorff, is closed.  "
},
{
  "id": "cor_compact_homeomorphism",
  "level": "2",
  "url": "s_compact_def.html#cor_compact_homeomorphism",
  "type": "Corollary",
  "number": "1.15.11",
  "title": "Compactness and homeomorphisms.",
  "body": " Compactness and homeomorphisms   Let be continuous and bijective. If is compact and is Hausdorff, then is a homeomorphism.    By , the map is closed, hence a homeomorphism.   "
},
{
  "id": "d_finite_intersection_property",
  "level": "2",
  "url": "s_compact_def.html#d_finite_intersection_property",
  "type": "Definition",
  "number": "1.15.12",
  "title": "Finite intersection property.",
  "body": " Finite intersection property   A collection of subsets of satisfies the finite intersection property if every finite subcollection has non trivial intersection: , .   "
},
{
  "id": "th_compact_equivalence",
  "level": "2",
  "url": "s_compact_def.html#th_compact_equivalence",
  "type": "Theorem",
  "number": "1.15.13",
  "title": "",
  "body": "  Let be a topological space. The following statements are equivalent.    is compact.    If is a collection of closed sets that satisfies the finite intersection property, then .      "
},
{
  "id": "cor_finite_intersection",
  "level": "2",
  "url": "s_compact_def.html#cor_finite_intersection",
  "type": "Corollary",
  "number": "1.15.14",
  "title": "Nested closed sets in compact space.",
  "body": " Nested closed sets in compact space   Let be a compact space. Given a nested sequence of nonempty closed subsets , we have .   "
},
{
  "id": "s_compact_metric",
  "level": "1",
  "url": "s_compact_metric.html",
  "type": "Section",
  "number": "1.16",
  "title": "Compactness in metric spaces",
  "body": " Compactness in metric spaces   Tychonoff theorem   Given any collection of compact topological spaces, the product space (with product topology) is compact.    We will often use the Tychonoff in its full strength, though for now we only prove the result for finite products. (See for the general case.) It suffices, by induction, to show that the product of two compact spaces is compact...     Tube lemma   Let be topological spaces, and assume is compact. Given any and open set containing , there is an open set such that .     Bounded, diameter, and distance to sets   Let be a metric space, let be a nonempty set, and let .  The diameter of , denoted , is defined as . The set is bounded if .  The distance  from to is defined as .     Heine-Borel theorem   Let . Recall that the Euclidean metric let and box metric both induce the Euclidean topology on . For any the following conditions are equivalent.    is compact.     is closed and bounded with respect to (equivalently, with respect to ).        Extreme value theorem   Let be continuous. If is compact, then there exist points such that and .     Lebesgue number   Let be a metric space. A Lebesgue number for an open covering is a positive real number satisfying the following condition: if , then for some .     Lebesgue number   If is a compact metric space, then any open covering of has a Lebesgue number.     Compact: continuous implies uniformly continuous   Let be a continuous function between the metric spaces and . If is compact, then is uniformly continuous: , for all there exists a such that if , then .     Limit point compact   A topological space is limit point compact if all infinite subsets of have a limit point.     Compact implies limit point compact   If is compact, then is limit point compact.     Sequentially compact   A topological space is sequentially compact if every sequences of elements of has a convergent subsequence.     Compactness in metric spaces   Let be a metric space. The following statements are equivalent.    is compact.     is limit point compact.     is sequentially compact.       "
},
{
  "id": "th_Tychonoff",
  "level": "2",
  "url": "s_compact_metric.html#th_Tychonoff",
  "type": "Theorem",
  "number": "1.16.1",
  "title": "Tychonoff theorem.",
  "body": " Tychonoff theorem   Given any collection of compact topological spaces, the product space (with product topology) is compact.    We will often use the Tychonoff in its full strength, though for now we only prove the result for finite products. (See for the general case.) It suffices, by induction, to show that the product of two compact spaces is compact...   "
},
{
  "id": "lem_tube",
  "level": "2",
  "url": "s_compact_metric.html#lem_tube",
  "type": "Lemma",
  "number": "1.16.2",
  "title": "Tube lemma.",
  "body": " Tube lemma   Let be topological spaces, and assume is compact. Given any and open set containing , there is an open set such that .   "
},
{
  "id": "d_bounded_diam_distance",
  "level": "2",
  "url": "s_compact_metric.html#d_bounded_diam_distance",
  "type": "Definition",
  "number": "1.16.3",
  "title": "Bounded, diameter, and distance to sets.",
  "body": " Bounded, diameter, and distance to sets   Let be a metric space, let be a nonempty set, and let .  The diameter of , denoted , is defined as . The set is bounded if .  The distance  from to is defined as .   "
},
{
  "id": "th_Heine_Borel",
  "level": "2",
  "url": "s_compact_metric.html#th_Heine_Borel",
  "type": "Theorem",
  "number": "1.16.4",
  "title": "Heine-Borel theorem.",
  "body": " Heine-Borel theorem   Let . Recall that the Euclidean metric let and box metric both induce the Euclidean topology on . For any the following conditions are equivalent.    is compact.     is closed and bounded with respect to (equivalently, with respect to ).      "
},
{
  "id": "cor_extreme_value_theorem",
  "level": "2",
  "url": "s_compact_metric.html#cor_extreme_value_theorem",
  "type": "Corollary",
  "number": "1.16.5",
  "title": "Extreme value theorem.",
  "body": " Extreme value theorem   Let be continuous. If is compact, then there exist points such that and .   "
},
{
  "id": "d_Lebesgue_number",
  "level": "2",
  "url": "s_compact_metric.html#d_Lebesgue_number",
  "type": "Definition",
  "number": "1.16.6",
  "title": "Lebesgue number.",
  "body": " Lebesgue number   Let be a metric space. A Lebesgue number for an open covering is a positive real number satisfying the following condition: if , then for some .   "
},
{
  "id": "cor_Lebesgue_number",
  "level": "2",
  "url": "s_compact_metric.html#cor_Lebesgue_number",
  "type": "Corollary",
  "number": "1.16.7",
  "title": "Lebesgue number.",
  "body": " Lebesgue number   If is a compact metric space, then any open covering of has a Lebesgue number.   "
},
{
  "id": "cor_continuous_uniformcontinuous",
  "level": "2",
  "url": "s_compact_metric.html#cor_continuous_uniformcontinuous",
  "type": "Corollary",
  "number": "1.16.8",
  "title": "Compact: continuous implies uniformly continuous.",
  "body": " Compact: continuous implies uniformly continuous   Let be a continuous function between the metric spaces and . If is compact, then is uniformly continuous: , for all there exists a such that if , then .   "
},
{
  "id": "d_limit_point_compact",
  "level": "2",
  "url": "s_compact_metric.html#d_limit_point_compact",
  "type": "Definition",
  "number": "1.16.9",
  "title": "Limit point compact.",
  "body": " Limit point compact   A topological space is limit point compact if all infinite subsets of have a limit point.   "
},
{
  "id": "th_compact_implies_limitpoint",
  "level": "2",
  "url": "s_compact_metric.html#th_compact_implies_limitpoint",
  "type": "Theorem",
  "number": "1.16.10",
  "title": "Compact implies limit point compact.",
  "body": " Compact implies limit point compact   If is compact, then is limit point compact.   "
},
{
  "id": "d_sequentially_compact",
  "level": "2",
  "url": "s_compact_metric.html#d_sequentially_compact",
  "type": "Definition",
  "number": "1.16.11",
  "title": "Sequentially compact.",
  "body": " Sequentially compact   A topological space is sequentially compact if every sequences of elements of has a convergent subsequence.   "
},
{
  "id": "th_compact_metric",
  "level": "2",
  "url": "s_compact_metric.html#th_compact_metric",
  "type": "Theorem",
  "number": "1.16.12",
  "title": "Compactness in metric spaces.",
  "body": " Compactness in metric spaces   Let be a metric space. The following statements are equivalent.    is compact.     is limit point compact.     is sequentially compact.      "
},
{
  "id": "s_locally",
  "level": "1",
  "url": "s_locally.html",
  "type": "Section",
  "number": "1.17",
  "title": "Locally compact spaces and compactification",
  "body": " Locally compact spaces and compactification   Locally compact space   A topological space is locally compact at if there is a compact neighborhood of : , if there is a compact set and open set containing such that . The space is locally compact if it is locally compact at all points .     One-point compactification   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.    There exists a compact Hausdorff space and continuous injection such that    is a homeomorphism, and     is a single point.      Furthermore, in this case, the compact space is unique up to homeomorphism.     Embedding   An embedding between topological spaces and is an injective continuous function such that is a homeomorphism (with respect to the subspace topology on ).  An embedding is open (resp., closed ) if is an open (resp. closed) subset of : equivalently, if the embedding is an open (resp., a closed) map.      A compactification of a topological space is an embedding , where is compact and .  A compactification is a one-point compactification if is a single point.     One-point compactification  Let be locally compact and Hausdorff. If is not compact, the embedding , where with topology as described in is a one-point compactification of .    One-point compactification of   We consider with the standard topology.   Produce a one-point compactification of where is a familiar space.    Produce a one-point compactification of where is a familiar space.    Use (2) to identify the one-point compactification of as a subspace of a familiar space.          The map defined as is an open embedding of onto . Thus this is a realization of the one-point compactification of .    Since is a homeomorphism, the map defined as the composition is an open embedding of onto , providing a realization of the one-point compactification of . Note that we have by definition .    Since the inclusion is a closed embedding, the restriction is an embedding (neither open nor closed) of into . Restricting the codomain to the closed (hence compact) subset we get a one-point compactification .        Stereographic projection  Let , the north pole of . Given any the line passing through and intersects the -plane in the unique point . The corresponding map can easily be shown to be a homeomorphism, with inverse . The map is called the stereographic projection onto . The open embedding realizes as the one-point compactification of .  Not surprisingly, this result generalizes easily to . There is a homeomorphism from to mapping to , whose inverse realizes as the one-point compactification of .    Local compactness equivalence   Let be a Hausdorff space. The following are equivalent.    is locally compact.    For all , and for all open sets containing , there is an open neighborhood of such that and is compact.       It is clear that (2) implies (1): for any , taking , we get an open neighborhood such that is compact. Thus is a compact neighborhood of .  We now show (1) implies (2). Munkres' proof elegantly uses the one-point compactification of . Solely by way of contrast I proceed more directly. Fix and open neighborhood . Since is locally compact, we have for some open set and compact set . Taking we may assume further that . The set is a closed subset of the compact set , hence compact. Since is Hausdorff, we can find disjoint open sets containing and , respectively. (See .) Let . Since is a closed subset of a compact set, it is compact. Furthermore, since is disjoint from , we must have .     Locally compact Hausdorff spaces   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.     is a homeomorphic to an open subspace of a compact Hausdorff space.       That (1) implies (2) follows from . For the converse, assume is homeomorphic to the open set , where is compact and Hausdorff. We may use the homeomorphism to identify with : thus we think of as an open subspace of . Now, since is compact, it is locally compact. Hence by , given any we can find an open such that and is compact. This shows that every has a compact neighborhoof , as desired.    "
},
{
  "id": "d_locally_compact",
  "level": "2",
  "url": "s_locally.html#d_locally_compact",
  "type": "Definition",
  "number": "1.17.1",
  "title": "Locally compact space.",
  "body": " Locally compact space   A topological space is locally compact at if there is a compact neighborhood of : , if there is a compact set and open set containing such that . The space is locally compact if it is locally compact at all points .   "
},
{
  "id": "th_onepoint_compactification",
  "level": "2",
  "url": "s_locally.html#th_onepoint_compactification",
  "type": "Theorem",
  "number": "1.17.2",
  "title": "One-point compactification.",
  "body": " One-point compactification   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.    There exists a compact Hausdorff space and continuous injection such that    is a homeomorphism, and     is a single point.      Furthermore, in this case, the compact space is unique up to homeomorphism.   "
},
{
  "id": "d_embedding",
  "level": "2",
  "url": "s_locally.html#d_embedding",
  "type": "Definition",
  "number": "1.17.3",
  "title": "Embedding.",
  "body": " Embedding   An embedding between topological spaces and is an injective continuous function such that is a homeomorphism (with respect to the subspace topology on ).  An embedding is open (resp., closed ) if is an open (resp. closed) subset of : equivalently, if the embedding is an open (resp., a closed) map.   "
},
{
  "id": "d_compactification",
  "level": "2",
  "url": "s_locally.html#d_compactification",
  "type": "Definition",
  "number": "1.17.4",
  "title": "",
  "body": "  A compactification of a topological space is an embedding , where is compact and .  A compactification is a one-point compactification if is a single point.   "
},
{
  "id": "project-15",
  "level": "2",
  "url": "s_locally.html#project-15",
  "type": "Topological specimen",
  "number": "15",
  "title": "One-point compactification.",
  "body": " One-point compactification  Let be locally compact and Hausdorff. If is not compact, the embedding , where with topology as described in is a one-point compactification of .  "
},
{
  "id": "eg_onepoint_compact_in_R",
  "level": "2",
  "url": "s_locally.html#eg_onepoint_compact_in_R",
  "type": "Example",
  "number": "1.17.5",
  "title": "One-point compactification of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " One-point compactification of   We consider with the standard topology.   Produce a one-point compactification of where is a familiar space.    Produce a one-point compactification of where is a familiar space.    Use (2) to identify the one-point compactification of as a subspace of a familiar space.          The map defined as is an open embedding of onto . Thus this is a realization of the one-point compactification of .    Since is a homeomorphism, the map defined as the composition is an open embedding of onto , providing a realization of the one-point compactification of . Note that we have by definition .    Since the inclusion is a closed embedding, the restriction is an embedding (neither open nor closed) of into . Restricting the codomain to the closed (hence compact) subset we get a one-point compactification .      "
},
{
  "id": "top_eg_stereographic_projection",
  "level": "2",
  "url": "s_locally.html#top_eg_stereographic_projection",
  "type": "Topological specimen",
  "number": "16",
  "title": "Stereographic projection.",
  "body": " Stereographic projection  Let , the north pole of . Given any the line passing through and intersects the -plane in the unique point . The corresponding map can easily be shown to be a homeomorphism, with inverse . The map is called the stereographic projection onto . The open embedding realizes as the one-point compactification of .  Not surprisingly, this result generalizes easily to . There is a homeomorphism from to mapping to , whose inverse realizes as the one-point compactification of .  "
},
{
  "id": "th_locally_compact_equivalence",
  "level": "2",
  "url": "s_locally.html#th_locally_compact_equivalence",
  "type": "Theorem",
  "number": "1.17.6",
  "title": "Local compactness equivalence.",
  "body": " Local compactness equivalence   Let be a Hausdorff space. The following are equivalent.    is locally compact.    For all , and for all open sets containing , there is an open neighborhood of such that and is compact.       It is clear that (2) implies (1): for any , taking , we get an open neighborhood such that is compact. Thus is a compact neighborhood of .  We now show (1) implies (2). Munkres' proof elegantly uses the one-point compactification of . Solely by way of contrast I proceed more directly. Fix and open neighborhood . Since is locally compact, we have for some open set and compact set . Taking we may assume further that . The set is a closed subset of the compact set , hence compact. Since is Hausdorff, we can find disjoint open sets containing and , respectively. (See .) Let . Since is a closed subset of a compact set, it is compact. Furthermore, since is disjoint from , we must have .   "
},
{
  "id": "cor_locallycompact_char",
  "level": "2",
  "url": "s_locally.html#cor_locallycompact_char",
  "type": "Corollary",
  "number": "1.17.7",
  "title": "Locally compact Hausdorff spaces.",
  "body": " Locally compact Hausdorff spaces   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.     is a homeomorphic to an open subspace of a compact Hausdorff space.       That (1) implies (2) follows from . For the converse, assume is homeomorphic to the open set , where is compact and Hausdorff. We may use the homeomorphism to identify with : thus we think of as an open subspace of . Now, since is compact, it is locally compact. Hence by , given any we can find an open such that and is compact. This shows that every has a compact neighborhoof , as desired.   "
},
{
  "id": "s_countability_axioms",
  "level": "1",
  "url": "s_countability_axioms.html",
  "type": "Section",
  "number": "1.18",
  "title": "Countability axioms",
  "body": " Countability axioms   Local basis   Let be a topological space. Given , a local basis at is a collection of open neighborhoods of such that for all open containing there is a such that .     First countable   A topological space is first countable if every has a countable local basis.     Countability properties  Since we will be dealing with countability questions, it will be useful to record some important countability properties. You may use the following facts in your arguments without any justification.   A countable union of countable sets is countable.    A finite product of countable sets is countable.    If is countable, then the set of all finite subsets of is countable.    If is countable and is a surjection, then is countable.       Metric spaces are first countable  Let be a metric space. For any the collection is a countable local basis at . Thus is first countable.    First countable cofinite spaces   Let be a topological space with the cofinite topology. Prove: is first countable if and only if is countable.    Assume is countable. A nonempty open set of is of the form for some . It follows that the nonempty open sets of are in bijection with the set of all finite subsets of . By , this collection is countable. Thus has countably many open sets. Thus for any the set of all open sets containing is countable.  Assume is first countable. Take any and let be a countable local basis at . By definition we have finite for each , in which case is countable, being a countable union of countable sets. I claim , proving is countable. Indeed, take any . The set is an open set containing . Thus we have for some , in which case , or equivalently, , as desired.     Sequentially closed\/continuous   Let and be topological spaces.  Given a set , its sequential closure is the set of all for which there is a a sequence of elements of with . The set is sequentially closed if .  A function is sequentially continuous if it maps convergent sequences to convergent sequences: , if in , then in .     First countable and sequential properties   Let be a first countable space.   For any there is a nested countable local basis : , for all we have .    A set is closed if and only if it is sequentially closed.    A function is continuous if and only if it is sequentially continuous.          Given let be a countable local basis at . For each , define . (Note that since .) We have for all . Furthermore, given any open , we have . Thus forms a nested local basis.    First, it is easy to see that in any space we have . Thus in any topological space, if is closed, then we have , and thus is sequentially closed. Now assume is sequentially closed, and take . Using (1), we pick a a local basis at that is nested: , for all , . Now, for each pick an element . We have : indeed, if is any open set containing , then for some , in which case for all . Since is sequentially compact, we have . Thus , and we conclude that .    The forward direction is true in any topological space, as we have shown before. Let's prove the reverse direction. Assume is sequentially continuous. Fix any and open set containing . Assume by way of contradiction that there is no open set such that . Let be a nested local basis at . Since for all , we can find an such that . The sequence converges to : indeed, given any open containing there is an such that . Since the local basis is nested, we have for all , and hence for all . However, it is clear that does not converge to , since by construction no lies in the open set . This contradicts the fact that is sequentially compact. We conclude that is continuous.        Second countable, Lindelöf, separable   Let be a topological space. A set is dense if .    is second countable if it has a countable basis.     is Lindelöf if every open cover of has a countable subcover.     is separable if it has a countable dense subset.        The four countability axioms  We will call the properties of being first countable, second countable, Lindelöf, and separable the {\\em four countablity axioms}.    Second countable: strongest countability axiom   Let be a topological space.   If is second countable, then is first countable, Lindelöf, and separable.    If is a metric space, then being second countable, Lindelöf, and separable are all equivalent properties.          Assume is second countable and let be a countable basis.  For each , the set is easily seen to be a countable local basis at . This proves is first countable.  Let be an open cover of . For each we have for some . Since the cover , we obtain the countable subcover . This proves is Lindelöf.  For each pick . Since is a basis, it follows that is dense: indeed, given any and open set , we have for some , in which case .    This is a (classic) homework exercise. Enjoy!        is second countable   Prove that is second countable with respect to the Euclidean topology.    First observe that the set of all -tuples is countable. According to (2) of it would suffice to show that is dense in . We take the hard route and show directly that has a countable basis.  For each , let . The set , being a countable union of countable sets, is countable. I claim it is a basis. It suffices to show that given any and , we can find a such that . To this end pick such that and pick such that , so that . It follows that , as desired.     is not metrizable   Let . Show that is first countable, Lindelöf, separable, but not second countable. Conclude that is not metrizable.    For each , the set forms a countable local basis at . Thus is first countable.  It is easy to see further that is dense with respect to the left limit topology.  To see that is not second countable, consider any basis of . For each , we can find a basis element such that . Note that since for such a , the map defines an injection of into : . This proves that is uncountable.  At this point, by (2) of we know that is not metrizable, since it is separable but not second countable. See Munkres for a proof that is also Lindelöf.     First\/second countable: subspaces, images, and products      If is first countable (resp. second countable) and is a subspace, then is first countable (resp. second countable).    If is open, continuous and surjective, then if is first countable (resp. second countable), is first countable (resp. second countable).    Let be a product of topological spaces. The following statements are equivalent.    is first countable (resp. second countable).     is first countable (resp. second countable) for all and the set of all such that does not have the trivial topology is countable.   As a result, a countable product of first countable (resp. second countable) spaces is first countable.          This is an easy consequence of the fact that for any basis (or local basis) of the corresponding set is a basis (or local basis) in .    It is easy to see that such a function maps bases (or local bases) in to bases (or local bases) in .    Homework exercise. Enjoy!        First countable: continuous image   Give an example of a first countable space and continuous function such that is not first countable.     is not metrizable.  Let . Show that is not metrizable.   "
},
{
  "id": "d_neighborhood_basis",
  "level": "2",
  "url": "s_countability_axioms.html#d_neighborhood_basis",
  "type": "Definition",
  "number": "1.18.1",
  "title": "Local basis.",
  "body": " Local basis   Let be a topological space. Given , a local basis at is a collection of open neighborhoods of such that for all open containing there is a such that .   "
},
{
  "id": "d_first_countable",
  "level": "2",
  "url": "s_countability_axioms.html#d_first_countable",
  "type": "Definition",
  "number": "1.18.2",
  "title": "First countable.",
  "body": " First countable   A topological space is first countable if every has a countable local basis.   "
},
{
  "id": "rm_countable",
  "level": "2",
  "url": "s_countability_axioms.html#rm_countable",
  "type": "Remark",
  "number": "1.18.3",
  "title": "Countability properties.",
  "body": " Countability properties  Since we will be dealing with countability questions, it will be useful to record some important countability properties. You may use the following facts in your arguments without any justification.   A countable union of countable sets is countable.    A finite product of countable sets is countable.    If is countable, then the set of all finite subsets of is countable.    If is countable and is a surjection, then is countable.     "
},
{
  "id": "eg_metric_first_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_metric_first_countable",
  "type": "Example",
  "number": "1.18.4",
  "title": "Metric spaces are first countable.",
  "body": " Metric spaces are first countable  Let be a metric space. For any the collection is a countable local basis at . Thus is first countable.  "
},
{
  "id": "eg_cofinite_first_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_cofinite_first_countable",
  "type": "Example",
  "number": "1.18.5",
  "title": "First countable cofinite spaces.",
  "body": " First countable cofinite spaces   Let be a topological space with the cofinite topology. Prove: is first countable if and only if is countable.    Assume is countable. A nonempty open set of is of the form for some . It follows that the nonempty open sets of are in bijection with the set of all finite subsets of . By , this collection is countable. Thus has countably many open sets. Thus for any the set of all open sets containing is countable.  Assume is first countable. Take any and let be a countable local basis at . By definition we have finite for each , in which case is countable, being a countable union of countable sets. I claim , proving is countable. Indeed, take any . The set is an open set containing . Thus we have for some , in which case , or equivalently, , as desired.   "
},
{
  "id": "d_sequentially_closed_continuous",
  "level": "2",
  "url": "s_countability_axioms.html#d_sequentially_closed_continuous",
  "type": "Definition",
  "number": "1.18.6",
  "title": "Sequentially closed\/continuous.",
  "body": " Sequentially closed\/continuous   Let and be topological spaces.  Given a set , its sequential closure is the set of all for which there is a a sequence of elements of with . The set is sequentially closed if .  A function is sequentially continuous if it maps convergent sequences to convergent sequences: , if in , then in .   "
},
{
  "id": "th_first_countable_sequences",
  "level": "2",
  "url": "s_countability_axioms.html#th_first_countable_sequences",
  "type": "Theorem",
  "number": "1.18.7",
  "title": "First countable and sequential properties.",
  "body": " First countable and sequential properties   Let be a first countable space.   For any there is a nested countable local basis : , for all we have .    A set is closed if and only if it is sequentially closed.    A function is continuous if and only if it is sequentially continuous.          Given let be a countable local basis at . For each , define . (Note that since .) We have for all . Furthermore, given any open , we have . Thus forms a nested local basis.    First, it is easy to see that in any space we have . Thus in any topological space, if is closed, then we have , and thus is sequentially closed. Now assume is sequentially closed, and take . Using (1), we pick a a local basis at that is nested: , for all , . Now, for each pick an element . We have : indeed, if is any open set containing , then for some , in which case for all . Since is sequentially compact, we have . Thus , and we conclude that .    The forward direction is true in any topological space, as we have shown before. Let's prove the reverse direction. Assume is sequentially continuous. Fix any and open set containing . Assume by way of contradiction that there is no open set such that . Let be a nested local basis at . Since for all , we can find an such that . The sequence converges to : indeed, given any open containing there is an such that . Since the local basis is nested, we have for all , and hence for all . However, it is clear that does not converge to , since by construction no lies in the open set . This contradicts the fact that is sequentially compact. We conclude that is continuous.      "
},
{
  "id": "d_second_countable",
  "level": "2",
  "url": "s_countability_axioms.html#d_second_countable",
  "type": "Definition",
  "number": "1.18.8",
  "title": "Second countable, Lindelöf, separable.",
  "body": " Second countable, Lindelöf, separable   Let be a topological space. A set is dense if .    is second countable if it has a countable basis.     is Lindelöf if every open cover of has a countable subcover.     is separable if it has a countable dense subset.      "
},
{
  "id": "rm_4_countable_axioms",
  "level": "2",
  "url": "s_countability_axioms.html#rm_4_countable_axioms",
  "type": "Remark",
  "number": "1.18.9",
  "title": "The four countability axioms.",
  "body": " The four countability axioms  We will call the properties of being first countable, second countable, Lindelöf, and separable the {\\em four countablity axioms}.  "
},
{
  "id": "th_second_countable",
  "level": "2",
  "url": "s_countability_axioms.html#th_second_countable",
  "type": "Theorem",
  "number": "1.18.10",
  "title": "Second countable: strongest countability axiom.",
  "body": " Second countable: strongest countability axiom   Let be a topological space.   If is second countable, then is first countable, Lindelöf, and separable.    If is a metric space, then being second countable, Lindelöf, and separable are all equivalent properties.          Assume is second countable and let be a countable basis.  For each , the set is easily seen to be a countable local basis at . This proves is first countable.  Let be an open cover of . For each we have for some . Since the cover , we obtain the countable subcover . This proves is Lindelöf.  For each pick . Since is a basis, it follows that is dense: indeed, given any and open set , we have for some , in which case .    This is a (classic) homework exercise. Enjoy!      "
},
{
  "id": "eg_Euclidean_second_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_Euclidean_second_countable",
  "type": "Example",
  "number": "1.18.11",
  "title": "<span class=\"process-math\">\\(\\R^n\\)<\/span> is second countable.",
  "body": " is second countable   Prove that is second countable with respect to the Euclidean topology.    First observe that the set of all -tuples is countable. According to (2) of it would suffice to show that is dense in . We take the hard route and show directly that has a countable basis.  For each , let . The set , being a countable union of countable sets, is countable. I claim it is a basis. It suffices to show that given any and , we can find a such that . To this end pick such that and pick such that , so that . It follows that , as desired.   "
},
{
  "id": "eg_Leftlimit_nonmetrizable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_Leftlimit_nonmetrizable",
  "type": "Example",
  "number": "1.18.12",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is not metrizable.",
  "body": " is not metrizable   Let . Show that is first countable, Lindelöf, separable, but not second countable. Conclude that is not metrizable.    For each , the set forms a countable local basis at . Thus is first countable.  It is easy to see further that is dense with respect to the left limit topology.  To see that is not second countable, consider any basis of . For each , we can find a basis element such that . Note that since for such a , the map defines an injection of into : . This proves that is uncountable.  At this point, by (2) of we know that is not metrizable, since it is separable but not second countable. See Munkres for a proof that is also Lindelöf.   "
},
{
  "id": "th_first_second_countable_subspace_product",
  "level": "2",
  "url": "s_countability_axioms.html#th_first_second_countable_subspace_product",
  "type": "Theorem",
  "number": "1.18.13",
  "title": "First\/second countable: subspaces, images, and products.",
  "body": " First\/second countable: subspaces, images, and products      If is first countable (resp. second countable) and is a subspace, then is first countable (resp. second countable).    If is open, continuous and surjective, then if is first countable (resp. second countable), is first countable (resp. second countable).    Let be a product of topological spaces. The following statements are equivalent.    is first countable (resp. second countable).     is first countable (resp. second countable) for all and the set of all such that does not have the trivial topology is countable.   As a result, a countable product of first countable (resp. second countable) spaces is first countable.          This is an easy consequence of the fact that for any basis (or local basis) of the corresponding set is a basis (or local basis) in .    It is easy to see that such a function maps bases (or local bases) in to bases (or local bases) in .    Homework exercise. Enjoy!      "
},
{
  "id": "eg_first_countable_continuous_image",
  "level": "2",
  "url": "s_countability_axioms.html#eg_first_countable_continuous_image",
  "type": "Example",
  "number": "1.18.14",
  "title": "First countable: continuous image.",
  "body": " First countable: continuous image   Give an example of a first countable space and continuous function such that is not first countable.   "
},
{
  "id": "eg_uncountable_product",
  "level": "2",
  "url": "s_countability_axioms.html#eg_uncountable_product",
  "type": "Example",
  "number": "1.18.15",
  "title": "<span class=\"process-math\">\\(\\R^\\R\\)<\/span> is not metrizable..",
  "body": " is not metrizable.  Let . Show that is not metrizable.  "
},
{
  "id": "s_regular",
  "level": "1",
  "url": "s_regular.html",
  "type": "Section",
  "number": "1.19",
  "title": "Regular spaces",
  "body": " Regular spaces   Separated by open sets   Let be a topological space. Subsets are separated by open sets if there exist disjoint open sets such that and .     Regular and normal spaces   Let be a topological space.    is regular if is , and given any closed set and any , the sets and can be separated by open sets.     is normal if is , and any two disjoint closed sets of can be separated by open sets.        Separation axioms  The properties of being , Hausdorff, regular, or normal are called separation axioms as they articulate how various subsets can be separated by open sets. Below you find the descriptions of these properties using the Trennungsaxiom schema. A further remark about the use of regular and normal in the literature: some texts do not include the condition in these notions, and describe the properties we define as regular Hausdorff and normal regular . There is considerably less ambiguity in the literature when using the descriptions, but you should still be careful.    Trennungsaxiom implications  It is easy to see that . Furthermore, your argument for the first two implications will reveal why the condition is needed.    Elementary examples      Discrete spaces are regular and normal.    An infinite space with the cofinite topology is neither regular nor normal.       (1) is clear since all sets are both open and closed. (2) follows from the fact that in this space any two nonempty open sets intersect nontrivially.     Metric spaces are normal   If is a metric space, then is normal.    Let be disjoint closed subsets of . For each we can find an such that . Similarly for each we can find an such that . I claim the open sets are disjoint, proving and are separated by open sets. Indeed if , then for some and . Without loss of generality we may assume that . But then we would have . This is a contradiction since we assumed .     is not regular   Prove: is Hausdorff, but not regular.    Since the -topology is finer than the standard topology on , is Hausdorff. To see that it is not regular, recall that is closed. I'll show that we cannot separate 0 and with open sets. Indeed, suppose we have open disjoint sets containing respectively. Since is open, it must contain an open basis element $B$ containing ; and since , this basis element can be chosen of the form . Now choose such that . Since we can find a basis element of the form that is contained in . Furthermore, shrinking if necessary, we can assume that . But then clearly , and hence also . Contradiction!     Regular and normal equivalences   Let be a -space.    is regular if and only if for all and open set , there is an open set such that .     is normal if and only if for any closed set and open set containing , there is an open set containing satisfying .          First, assume is regular. Given and as described, we can separate and the closed set by open sets and . It follows that : indeed, given any , the open set contains and does not intersect with .  Conversely, assume for all and open sets we can find an open set satisfying . Given any closed set and element , letting , we see that there is an open set satisfying . The open sets and are then easily seen to separate and .    This proof is very similar to the last. Essenially you need only replace with a closed set throughout.        Locally compact implies regular   Let be locally compact and Hausdorff. Prove: is regular.    This is an easy consequence of and .     Locally compact and non-normal  Yes, there are examples of locally compact -spaces that are not normal. They are not particularly easy to build, however. Look it up!    is regular   Prove: is regular.    Since has a finer topology than , it is . We will use the equivalence (1) from . Given any and open set , we can find such that . But is closed! (Prove this.) Thus we have found an open containing such that .     Basis of clopen sets  The argument from is easily generalized to show that any -space that has a basis consisting of sets that are both open and closed ( , clopen sets) is regular.    Regularity: subspace and product properties      Subspaces of regular spaces are regular.    Products of regular spaces are regular.          Assume is a subspace of the regular space . We know already that subspaces of -spaces are , so is . Next take any and any set not containing that is closed in . We have for some closed set . Since and is regular, we can find disjoint open sets that separate and in . The disjoint open (in ) sets and are then a separation of and in .    We use (1) from . Given and open set containing , choose a basis element of the form containing . Since each is regular, we can find open sets satisfying . Letting , we have .        Interestingly, neither of the statements of are true if regular is replaced with normal . It is worthwhile to examine what goes wrong in our arguments above if the element is replaced with a closed set throughout.   "
},
{
  "id": "d_separated",
  "level": "2",
  "url": "s_regular.html#d_separated",
  "type": "Definition",
  "number": "1.19.1",
  "title": "Separated by open sets.",
  "body": " Separated by open sets   Let be a topological space. Subsets are separated by open sets if there exist disjoint open sets such that and .   "
},
{
  "id": "d_regular_normal",
  "level": "2",
  "url": "s_regular.html#d_regular_normal",
  "type": "Definition",
  "number": "1.19.2",
  "title": "Regular and normal spaces.",
  "body": " Regular and normal spaces   Let be a topological space.    is regular if is , and given any closed set and any , the sets and can be separated by open sets.     is normal if is , and any two disjoint closed sets of can be separated by open sets.      "
},
{
  "id": "rm_separated",
  "level": "2",
  "url": "s_regular.html#rm_separated",
  "type": "Remark",
  "number": "1.19.3",
  "title": "Separation axioms.",
  "body": " Separation axioms  The properties of being , Hausdorff, regular, or normal are called separation axioms as they articulate how various subsets can be separated by open sets. Below you find the descriptions of these properties using the Trennungsaxiom schema. A further remark about the use of regular and normal in the literature: some texts do not include the condition in these notions, and describe the properties we define as regular Hausdorff and normal regular . There is considerably less ambiguity in the literature when using the descriptions, but you should still be careful.  "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "s_regular.html#remark-30",
  "type": "Remark",
  "number": "1.19.4",
  "title": "Trennungsaxiom implications.",
  "body": " Trennungsaxiom implications  It is easy to see that . Furthermore, your argument for the first two implications will reveal why the condition is needed.  "
},
{
  "id": "eg_regular",
  "level": "2",
  "url": "s_regular.html#eg_regular",
  "type": "Example",
  "number": "1.19.5",
  "title": "Elementary examples.",
  "body": " Elementary examples      Discrete spaces are regular and normal.    An infinite space with the cofinite topology is neither regular nor normal.       (1) is clear since all sets are both open and closed. (2) follows from the fact that in this space any two nonempty open sets intersect nontrivially.   "
},
{
  "id": "th_metrizable_implies_normal",
  "level": "2",
  "url": "s_regular.html#th_metrizable_implies_normal",
  "type": "Theorem",
  "number": "1.19.6",
  "title": "Metric spaces are normal.",
  "body": " Metric spaces are normal   If is a metric space, then is normal.    Let be disjoint closed subsets of . For each we can find an such that . Similarly for each we can find an such that . I claim the open sets are disjoint, proving and are separated by open sets. Indeed if , then for some and . Without loss of generality we may assume that . But then we would have . This is a contradiction since we assumed .   "
},
{
  "id": "eg_RK_not_regular",
  "level": "2",
  "url": "s_regular.html#eg_RK_not_regular",
  "type": "Example",
  "number": "1.19.7",
  "title": "<span class=\"process-math\">\\(\\R_K\\)<\/span> is not regular.",
  "body": " is not regular   Prove: is Hausdorff, but not regular.    Since the -topology is finer than the standard topology on , is Hausdorff. To see that it is not regular, recall that is closed. I'll show that we cannot separate 0 and with open sets. Indeed, suppose we have open disjoint sets containing respectively. Since is open, it must contain an open basis element $B$ containing ; and since , this basis element can be chosen of the form . Now choose such that . Since we can find a basis element of the form that is contained in . Furthermore, shrinking if necessary, we can assume that . But then clearly , and hence also . Contradiction!   "
},
{
  "id": "th_regular_normal_equivalence",
  "level": "2",
  "url": "s_regular.html#th_regular_normal_equivalence",
  "type": "Theorem",
  "number": "1.19.8",
  "title": "Regular and normal equivalences.",
  "body": " Regular and normal equivalences   Let be a -space.    is regular if and only if for all and open set , there is an open set such that .     is normal if and only if for any closed set and open set containing , there is an open set containing satisfying .          First, assume is regular. Given and as described, we can separate and the closed set by open sets and . It follows that : indeed, given any , the open set contains and does not intersect with .  Conversely, assume for all and open sets we can find an open set satisfying . Given any closed set and element , letting , we see that there is an open set satisfying . The open sets and are then easily seen to separate and .    This proof is very similar to the last. Essenially you need only replace with a closed set throughout.      "
},
{
  "id": "th_locally_compact_regular",
  "level": "2",
  "url": "s_regular.html#th_locally_compact_regular",
  "type": "Theorem",
  "number": "1.19.9",
  "title": "Locally compact implies regular.",
  "body": " Locally compact implies regular   Let be locally compact and Hausdorff. Prove: is regular.    This is an easy consequence of and .   "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "s_regular.html#remark-31",
  "type": "Remark",
  "number": "1.19.10",
  "title": "Locally compact and non-normal.",
  "body": " Locally compact and non-normal  Yes, there are examples of locally compact -spaces that are not normal. They are not particularly easy to build, however. Look it up!  "
},
{
  "id": "eg_Rl_regular",
  "level": "2",
  "url": "s_regular.html#eg_Rl_regular",
  "type": "Example",
  "number": "1.19.11",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is regular.",
  "body": " is regular   Prove: is regular.    Since has a finer topology than , it is . We will use the equivalence (1) from . Given any and open set , we can find such that . But is closed! (Prove this.) Thus we have found an open containing such that .   "
},
{
  "id": "rm_regular_open_closed_basis",
  "level": "2",
  "url": "s_regular.html#rm_regular_open_closed_basis",
  "type": "Remark",
  "number": "1.19.12",
  "title": "Basis of clopen sets.",
  "body": " Basis of clopen sets  The argument from is easily generalized to show that any -space that has a basis consisting of sets that are both open and closed ( , clopen sets) is regular.  "
},
{
  "id": "th_regular_props",
  "level": "2",
  "url": "s_regular.html#th_regular_props",
  "type": "Theorem",
  "number": "1.19.13",
  "title": "Regularity: subspace and product properties.",
  "body": " Regularity: subspace and product properties      Subspaces of regular spaces are regular.    Products of regular spaces are regular.          Assume is a subspace of the regular space . We know already that subspaces of -spaces are , so is . Next take any and any set not containing that is closed in . We have for some closed set . Since and is regular, we can find disjoint open sets that separate and in . The disjoint open (in ) sets and are then a separation of and in .    We use (1) from . Given and open set containing , choose a basis element of the form containing . Since each is regular, we can find open sets satisfying . Letting , we have .      "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "s_regular.html#remark-33",
  "type": "Remark",
  "number": "1.19.14",
  "title": "",
  "body": " Interestingly, neither of the statements of are true if regular is replaced with normal . It is worthwhile to examine what goes wrong in our arguments above if the element is replaced with a closed set throughout.  "
},
{
  "id": "s_normal",
  "level": "1",
  "url": "s_normal.html",
  "type": "Section",
  "number": "1.20",
  "title": "Normal spaces",
  "body": " Normal spaces   is normal   Prove: is normal.    Let be disjoint closed subsets of . We can find open coverings satisfying for all . First observe that for all . Indeed, otherwise we'd have , in which case either or : both are impossible since and . We conclude that , proving that and can be separated by open sets.     is not normal   Prove: is not normal.    See Munkres for the full proof. I'll content myself with a discussion of some of the key elements. First, let . This set is closed in , and hence closed in , since the left limit product topology is finer than the standard topology. Next, as we saw on a previous homework, is discrete as a subspace of : if follows that every subset of , being itself closed in , is closed in , using transitivity. In particular the two sets . By what we said above, the disjoint sets and are closed in , but as it turns out you cannot separate them by open sets. The proof is not terribly difficult, but will seem somewhat convoluted without knowing about the Baire category theorem. As such, I omit it. (Munkres doesn't use this approach, choosing instead a proof by contradiction, but he outlines a proof in one of his exercises.)     Regular+second countable normal   If is regular and second countable, then is normal.    Assume is regular and second countable. Let be a countable basis for . Let and be disjoint closed sets. By regularity, for each we can find disjoint open sets containing and respectively. Since is a basis, we can find a basis element such that . The set of all such is a countable subset of , giving rise to a countable cover satisfying for all . Similarly, we can construct an open covering satisfying for all . The corresponding open sets are not necessarily disjoint. However the sets and , where , still cover and respectively, are still open, and are disjoint.     Compact+Hausdorff normal   If is a compact Hausdorff space, then is normal.    Since is compact Hausdorff, it is locally compact Hausdorff, and hence regular by . We use the equivalent condition of normality from . To this end, let be closed, and let be any open set containing . Since is regular, for all we can find an open set containing such that . We have . Since is compact and is closed, is compact. Hence there is a finite subcovering . We have , as desired.    "
},
{
  "id": "eg_Rl_normal",
  "level": "2",
  "url": "s_normal.html#eg_Rl_normal",
  "type": "Example",
  "number": "1.20.1",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is normal.",
  "body": " is normal   Prove: is normal.    Let be disjoint closed subsets of . We can find open coverings satisfying for all . First observe that for all . Indeed, otherwise we'd have , in which case either or : both are impossible since and . We conclude that , proving that and can be separated by open sets.   "
},
{
  "id": "example-64",
  "level": "2",
  "url": "s_normal.html#example-64",
  "type": "Example",
  "number": "1.20.2",
  "title": "<span class=\"process-math\">\\(R_\\ell\\times R_\\ell\\)<\/span> is not normal.",
  "body": " is not normal   Prove: is not normal.    See Munkres for the full proof. I'll content myself with a discussion of some of the key elements. First, let . This set is closed in , and hence closed in , since the left limit product topology is finer than the standard topology. Next, as we saw on a previous homework, is discrete as a subspace of : if follows that every subset of , being itself closed in , is closed in , using transitivity. In particular the two sets . By what we said above, the disjoint sets and are closed in , but as it turns out you cannot separate them by open sets. The proof is not terribly difficult, but will seem somewhat convoluted without knowing about the Baire category theorem. As such, I omit it. (Munkres doesn't use this approach, choosing instead a proof by contradiction, but he outlines a proof in one of his exercises.)   "
},
{
  "id": "th_regular_separable_normal",
  "level": "2",
  "url": "s_normal.html#th_regular_separable_normal",
  "type": "Theorem",
  "number": "1.20.3",
  "title": "Regular+second countable <span class=\"process-math\">\\(\\implies\\)<\/span> normal.",
  "body": " Regular+second countable normal   If is regular and second countable, then is normal.    Assume is regular and second countable. Let be a countable basis for . Let and be disjoint closed sets. By regularity, for each we can find disjoint open sets containing and respectively. Since is a basis, we can find a basis element such that . The set of all such is a countable subset of , giving rise to a countable cover satisfying for all . Similarly, we can construct an open covering satisfying for all . The corresponding open sets are not necessarily disjoint. However the sets and , where , still cover and respectively, are still open, and are disjoint.   "
},
{
  "id": "th_compact_Hausdorff_normal",
  "level": "2",
  "url": "s_normal.html#th_compact_Hausdorff_normal",
  "type": "Theorem",
  "number": "1.20.4",
  "title": "Compact+Hausdorff <span class=\"process-math\">\\(\\implies\\)<\/span> normal.",
  "body": " Compact+Hausdorff normal   If is a compact Hausdorff space, then is normal.    Since is compact Hausdorff, it is locally compact Hausdorff, and hence regular by . We use the equivalent condition of normality from . To this end, let be closed, and let be any open set containing . Since is regular, for all we can find an open set containing such that . We have . Since is compact and is closed, is compact. Hence there is a finite subcovering . We have , as desired.   "
},
{
  "id": "s_Urysohn_lemma",
  "level": "1",
  "url": "s_Urysohn_lemma.html",
  "type": "Section",
  "number": "1.21",
  "title": "Urysohn lemma",
  "body": " Urysohn lemma   Urysohn lemma   Let be a normal space. Given two nonempty disjoint closed sets and there is a continuous function such that and .  It follows easily that the result is still true if we replace the interval with any closed interval .    It would be difficult to improve upon Munkres' exposition of this. I give essentially a full proof below nonetheless.    Step 1: construction of open sets  The first crucial step in the proof is to build a collection of open sets satisfying if . This is done by first picking an enumeration of where for convenience and . We use the enumeration to define open sets for each recursively as follows. Set . Since , by we can find an open containing such that . Now take any and assume by induction that we constructed open sets satisfying the desired inclusion condition. Write where and are the immediate predecessor and successor, respectively, of among the set . By induction we have . Pick to be any open set satisfying . Lastly define for all and for all . It is easy to see that thus defined, our collection satisfies the desired inclusion condition.    Step 2: definition of and continuity  Define as . Some easy properties of :    for all .     for all .     for all .   We prove continuity by showing that is continuous at each . Given and open set containing , choose rational numbers satisfying . I claim is an open set containing satisfying . First, it is clear that is open, and it follows easily from the elementary properties of quoted above that . Next, given any , since , we have , and since , we have . This concludes the proof.     Separated by a continuous function   Let be a topological space. Subsets are separated by a continuous function if there is a continuous function such that and .     Separation in normal spaces  If the closed sets are separated by the continuous function , they are separated by the open sets and . The Urysohn lemma tells us that in normal spaces the two notions are equivalent!   We can explore this idea of separated by a continuous function in relation to some of the other Trennnungsaxiome . For example, taking the regularity axiom ( ) and replacing the separated by open sets condition with a separated by a continuous function condition, we obtain the notion of complete regularity .   Completely regular   A -space is completely regular (or ) if for any closed set and element , there is a continuous function , such that and .     Complete regularity  With respect to regularity, separation by a continuous function is truly a stronger notion: , there are spaces that are regular but not completely regular. This is in contrast to the situation with normality: by Urysohn's lemma a space is normal if and only if disjoint closed sets are separated by a continuous function. Note also that by Urysohn's lemma, any normal space is completely regular. Thus adding to our list of Trennungsaxiome we still have a list of properties that satisfies if .    The notion of complete regularity strikes a nice balance between regularity and normality. In particular, it is stronger than regularity, but still behaves well with respect to subspaces and products.   Complete regularity: subspace and product properties      Subspaces of completely regular spaces are completely regular.    Products of completely regular spaces are completely regular.       The proof of (1) is elementary. (See text.) The proof of (2) is more interesting. Assume is a collection of completely regular spaces, and let . Let be a closed set, and let be any element not contained in . Since is open, we can find a base open neighborhood of of the form . For each let be a continuous function satisfying . The function is continuous (product of continuous functions) and satisfies and .    "
},
{
  "id": "th_Urysohn_lemma",
  "level": "2",
  "url": "s_Urysohn_lemma.html#th_Urysohn_lemma",
  "type": "Theorem",
  "number": "1.21.1",
  "title": "Urysohn lemma.",
  "body": " Urysohn lemma   Let be a normal space. Given two nonempty disjoint closed sets and there is a continuous function such that and .  It follows easily that the result is still true if we replace the interval with any closed interval .    It would be difficult to improve upon Munkres' exposition of this. I give essentially a full proof below nonetheless.    Step 1: construction of open sets  The first crucial step in the proof is to build a collection of open sets satisfying if . This is done by first picking an enumeration of where for convenience and . We use the enumeration to define open sets for each recursively as follows. Set . Since , by we can find an open containing such that . Now take any and assume by induction that we constructed open sets satisfying the desired inclusion condition. Write where and are the immediate predecessor and successor, respectively, of among the set . By induction we have . Pick to be any open set satisfying . Lastly define for all and for all . It is easy to see that thus defined, our collection satisfies the desired inclusion condition.    Step 2: definition of and continuity  Define as . Some easy properties of :    for all .     for all .     for all .   We prove continuity by showing that is continuous at each . Given and open set containing , choose rational numbers satisfying . I claim is an open set containing satisfying . First, it is clear that is open, and it follows easily from the elementary properties of quoted above that . Next, given any , since , we have , and since , we have . This concludes the proof.   "
},
{
  "id": "d_separated_continuous_function",
  "level": "2",
  "url": "s_Urysohn_lemma.html#d_separated_continuous_function",
  "type": "Definition",
  "number": "1.21.2",
  "title": "Separated by a continuous function.",
  "body": " Separated by a continuous function   Let be a topological space. Subsets are separated by a continuous function if there is a continuous function such that and .   "
},
{
  "id": "rm_Urysohn_lemma",
  "level": "2",
  "url": "s_Urysohn_lemma.html#rm_Urysohn_lemma",
  "type": "Remark",
  "number": "1.21.3",
  "title": "Separation in normal spaces.",
  "body": " Separation in normal spaces  If the closed sets are separated by the continuous function , they are separated by the open sets and . The Urysohn lemma tells us that in normal spaces the two notions are equivalent!  "
},
{
  "id": "d_completely_regular_normal",
  "level": "2",
  "url": "s_Urysohn_lemma.html#d_completely_regular_normal",
  "type": "Definition",
  "number": "1.21.4",
  "title": "Completely regular.",
  "body": " Completely regular   A -space is completely regular (or ) if for any closed set and element , there is a continuous function , such that and .   "
},
{
  "id": "rm_complete_regularity",
  "level": "2",
  "url": "s_Urysohn_lemma.html#rm_complete_regularity",
  "type": "Remark",
  "number": "1.21.5",
  "title": "Complete regularity.",
  "body": " Complete regularity  With respect to regularity, separation by a continuous function is truly a stronger notion: , there are spaces that are regular but not completely regular. This is in contrast to the situation with normality: by Urysohn's lemma a space is normal if and only if disjoint closed sets are separated by a continuous function. Note also that by Urysohn's lemma, any normal space is completely regular. Thus adding to our list of Trennungsaxiome we still have a list of properties that satisfies if .   "
},
{
  "id": "th_complete_regularity",
  "level": "2",
  "url": "s_Urysohn_lemma.html#th_complete_regularity",
  "type": "Theorem",
  "number": "1.21.6",
  "title": "Complete regularity: subspace and product properties.",
  "body": " Complete regularity: subspace and product properties      Subspaces of completely regular spaces are completely regular.    Products of completely regular spaces are completely regular.       The proof of (1) is elementary. (See text.) The proof of (2) is more interesting. Assume is a collection of completely regular spaces, and let . Let be a closed set, and let be any element not contained in . Since is open, we can find a base open neighborhood of of the form . For each let be a continuous function satisfying . The function is continuous (product of continuous functions) and satisfies and .   "
},
{
  "id": "s_Urysohn_metrization",
  "level": "1",
  "url": "s_Urysohn_metrization.html",
  "type": "Section",
  "number": "1.22",
  "title": "Urysohn metrization theorem",
  "body": " Urysohn metrization theorem   Urysohn metrization theorem   If is a regular second countable space, then is metrizable.    The main step in the proof, one that uses , is the construction of a countable family of continuous functions satisfying the following property: for all and for all open sets containing , there is an such that and . It then follows from that the map defined as is an embedding into the metric space . Since subspaces of metric spaces are metric spaces, we conclude that is metrizable.  We now proceed with the construction. Let be a countable basis of . For all satisfying , let be a continuous function satisfying and : this guaranteed to exist by since , being regular and second countable, is normal. Since the collection is countable we can enumerate it as . Now, for any and any open set , we have for some . Since is regular, we can find a basis element such that . We have for some , , and , as desired.     Embedding theorem   Let be a -space. Given any collection of continuous functions satisfying the property that for all and for all open sets containing there is an such that and , the map defined as is an embedding into .     is injective  Since is , given any we can find an open set such that and . By assumption, there is some such that and . It follows that and hence that .    is continuous  This follows immediately from since each is continuous.    is embedding  Lastly, we prove that is an embedding mapping homeomorphically onto . Let be an open set containing an element , and let . Pick any such that and . Let be the projection map onto the -th coordinate, and define . Since is continuous and is open, the set is open in the subspace topology of . We claim that , proving that is an embedding. Since , we have . Similarly, if , then , from whence it follows that : otherwise we'd have .      Urysohn metrization theorem  Munkres gives an alternative proof that shows any regular second countable space can be embedded into with respect to the uniform metric. This argument is then generalized later to prove the Nagata-Smirnov metrization theorem, which states that is metrizable if and only if it is regular and has countable locally finite basis.     A space is completely regular if and only if it is homeomorphic to a subspace of for some set .    "
},
{
  "id": "th_Urysohn_metrization",
  "level": "2",
  "url": "s_Urysohn_metrization.html#th_Urysohn_metrization",
  "type": "Theorem",
  "number": "1.22.1",
  "title": "Urysohn metrization theorem.",
  "body": " Urysohn metrization theorem   If is a regular second countable space, then is metrizable.    The main step in the proof, one that uses , is the construction of a countable family of continuous functions satisfying the following property: for all and for all open sets containing , there is an such that and . It then follows from that the map defined as is an embedding into the metric space . Since subspaces of metric spaces are metric spaces, we conclude that is metrizable.  We now proceed with the construction. Let be a countable basis of . For all satisfying , let be a continuous function satisfying and : this guaranteed to exist by since , being regular and second countable, is normal. Since the collection is countable we can enumerate it as . Now, for any and any open set , we have for some . Since is regular, we can find a basis element such that . We have for some , , and , as desired.   "
},
{
  "id": "th_embedding_theorem",
  "level": "2",
  "url": "s_Urysohn_metrization.html#th_embedding_theorem",
  "type": "Theorem",
  "number": "1.22.2",
  "title": "Embedding theorem.",
  "body": " Embedding theorem   Let be a -space. Given any collection of continuous functions satisfying the property that for all and for all open sets containing there is an such that and , the map defined as is an embedding into .     is injective  Since is , given any we can find an open set such that and . By assumption, there is some such that and . It follows that and hence that .    is continuous  This follows immediately from since each is continuous.    is embedding  Lastly, we prove that is an embedding mapping homeomorphically onto . Let be an open set containing an element , and let . Pick any such that and . Let be the projection map onto the -th coordinate, and define . Since is continuous and is open, the set is open in the subspace topology of . We claim that , proving that is an embedding. Since , we have . Similarly, if , then , from whence it follows that : otherwise we'd have .    "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "s_Urysohn_metrization.html#remark-36",
  "type": "Remark",
  "number": "1.22.3",
  "title": "Urysohn metrization theorem.",
  "body": " Urysohn metrization theorem  Munkres gives an alternative proof that shows any regular second countable space can be embedded into with respect to the uniform metric. This argument is then generalized later to prove the Nagata-Smirnov metrization theorem, which states that is metrizable if and only if it is regular and has countable locally finite basis.  "
},
{
  "id": "cor_completely_regular_embedding",
  "level": "2",
  "url": "s_Urysohn_metrization.html#cor_completely_regular_embedding",
  "type": "Corollary",
  "number": "1.22.4",
  "title": "",
  "body": "  A space is completely regular if and only if it is homeomorphic to a subspace of for some set .   "
},
{
  "id": "s_Tietze_extension",
  "level": "1",
  "url": "s_Tietze_extension.html",
  "type": "Section",
  "number": "1.23",
  "title": "Further applications of Urysohn",
  "body": " Further applications of Urysohn   Tietze extension theorem   Let be a closed subset of the normal space .   Any continuous function can be extended to a continuous function .    Any continuous function can be extended to a continuous function .       Proof of (1)  First we show that for any continuous function , we can find a continuous function such that (i) and (ii) for all . To do so, subdivide as define and , and, using Urysohn's lemma, choose a continuous function such that and . It is easily verified that this does the trick.  Now assume we have a continuous function . Letting , we see that extends continuously to if and only if extends continuously to . Thus, we may assume . We can build a sequence of continuous functions satisfying the following properties:    for all .     for all .   It follows from some convergence of infinite sums arguments that is a well-defined continuous function from to satisfying for all . (See Munkres for these details. Basically just the Weierstrass M-test, if that is familiar to you.)  How dow we build this sequence? From our first paragraph, we can pick to be any function satisfying and . Next assume we have constructed as specified for all . Apply the same reasoning to the function , which by assumption maps to to find . By the recursion principle we get a sequence satisfying (i) and (ii) for all .    Proof of (2)  Let be a homeomorphism. A continuous function extends continuously to a function if and only if extends continuously to a function . Thus we may assume . Since , by (1) there is a function . Let . If is nonempty, then , as desired. Otherwise, since is closed and , there is a continuous function such that and . The function is an extension of on that maps into , as desired.     Space-filling curve  We will show that there is a continuous surjective function . This is thus a path or curve, whose image is all of . This called a space-filling curve , or Peano curve .  Let be the Cantor set, and choose a homeomorphism .    Partition of unity   Let . The {\\bf support} of a continuous function is defined as .  A partition of unity dominated by the open cover  is a collection of continuous functions satisfying (i) for all , and (ii) for all .     Partition of unity (finite)   Let be a normal space. Given any finite open covering of , there is a partition of unity dominated by .     Compact manifold embedding   Let be a compact -manifold. There is an embedding for some .    "
},
{
  "id": "th_Tietze_extension",
  "level": "2",
  "url": "s_Tietze_extension.html#th_Tietze_extension",
  "type": "Theorem",
  "number": "1.23.1",
  "title": "Tietze extension theorem.",
  "body": " Tietze extension theorem   Let be a closed subset of the normal space .   Any continuous function can be extended to a continuous function .    Any continuous function can be extended to a continuous function .       Proof of (1)  First we show that for any continuous function , we can find a continuous function such that (i) and (ii) for all . To do so, subdivide as define and , and, using Urysohn's lemma, choose a continuous function such that and . It is easily verified that this does the trick.  Now assume we have a continuous function . Letting , we see that extends continuously to if and only if extends continuously to . Thus, we may assume . We can build a sequence of continuous functions satisfying the following properties:    for all .     for all .   It follows from some convergence of infinite sums arguments that is a well-defined continuous function from to satisfying for all . (See Munkres for these details. Basically just the Weierstrass M-test, if that is familiar to you.)  How dow we build this sequence? From our first paragraph, we can pick to be any function satisfying and . Next assume we have constructed as specified for all . Apply the same reasoning to the function , which by assumption maps to to find . By the recursion principle we get a sequence satisfying (i) and (ii) for all .    Proof of (2)  Let be a homeomorphism. A continuous function extends continuously to a function if and only if extends continuously to a function . Thus we may assume . Since , by (1) there is a function . Let . If is nonempty, then , as desired. Otherwise, since is closed and , there is a continuous function such that and . The function is an extension of on that maps into , as desired.   "
},
{
  "id": "top_eg_space_filling",
  "level": "2",
  "url": "s_Tietze_extension.html#top_eg_space_filling",
  "type": "Topological specimen",
  "number": "17",
  "title": "Space-filling curve.",
  "body": " Space-filling curve  We will show that there is a continuous surjective function . This is thus a path or curve, whose image is all of . This called a space-filling curve , or Peano curve .  Let be the Cantor set, and choose a homeomorphism .  "
},
{
  "id": "d_partition_of_unity",
  "level": "2",
  "url": "s_Tietze_extension.html#d_partition_of_unity",
  "type": "Definition",
  "number": "1.23.2",
  "title": "Partition of unity.",
  "body": " Partition of unity   Let . The {\\bf support} of a continuous function is defined as .  A partition of unity dominated by the open cover  is a collection of continuous functions satisfying (i) for all , and (ii) for all .   "
},
{
  "id": "th_partition_of_unity",
  "level": "2",
  "url": "s_Tietze_extension.html#th_partition_of_unity",
  "type": "Theorem",
  "number": "1.23.3",
  "title": "Partition of unity (finite).",
  "body": " Partition of unity (finite)   Let be a normal space. Given any finite open covering of , there is a partition of unity dominated by .   "
},
{
  "id": "cor_manifold_embedding",
  "level": "2",
  "url": "s_Tietze_extension.html#cor_manifold_embedding",
  "type": "Corollary",
  "number": "1.23.4",
  "title": "Compact manifold embedding.",
  "body": " Compact manifold embedding   Let be a compact -manifold. There is an embedding for some .   "
},
{
  "id": "s_nets",
  "level": "1",
  "url": "s_nets.html",
  "type": "Section",
  "number": "1.24",
  "title": "Nets",
  "body": " Nets   Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   The relation is a quasiordering (or preordering ) if it satisfies axioms PO1 and PO2. When is a partial ordering or a quasiordering, we will often write for .  A partially ordered set (POSET, for short) is a pair , where is a partial ordering on . Similarly,a quasiordered set is a pair , where is a a quasiordering on .     Common examples     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    For an element in a topological space the set of all open neighborhoods of is a partially ordered set under reverse inclusion: , .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a quasiordering on , but not a partial ordering: and , but . The same relation does define a partial ordering on .       Directed set   A directed set is a pair , where is a quasiordering on that satisfies the following axiom.   Directed (D)  For all , there is a such that and .   A subset of a directed set is cofinal if for all there is a such that .     Common examples  Each quasiordered (and\/or partially ordered) set in is easily seen to satisfy the further axiom (D), and is thus a directed set.    Nets and convergent nets   Let be a set. A net in is a function where is a directed set. In particular, a net is a tuple, and accordingly we may use the coordinate notation , where .  A net is eventually in a subset if there is an element such that for all .  Assume is a topological space. A net  converges to an element , denoted , if for all open sets containing the net is eventually in .  A net is cofinally in a subset if the set is cofinal: equivalently, if for all there is a such that .  An element is a limit point of the net if is cofinally in every open neighborhood of .     Riemann integral  A careful examination of the Riemann integral of a function over an interval reveals that it is a statement about a convergent net. Indeed, let be the set of all pointed partitions of into subintervals: , an element of is a pair , where is a subinterval partition and is a choice of sample points in each subinterval of . The relation is a quasiordering on satisfying (D). To any function we can associate the net , where for each we define to be the corresponding Riemann sum of . The Riemann integral exists and is equal to if and only the net converges to .    Nets and topology   Let be a topological space.   The closure of any set is the set of all for which there is a net such that .  It follows that a subset is closed if and only if it contains all limits of all convergent nets in .    A function is continuous if and only if for all convergent nets the net is convergent.    The space is Hausdorff if and only if every net in converges to at most one element in .          Assume . For all open sets containing , choose . Let be the set of all open neighborhoods of , considered as a directed set with reverse inclusion. Define as . The net converges to . Indeed, for any open set containing , we set : if , then (by definition of our ordering), and hence .  Assume for some net in . Given any open set containing , there is an such that for all . In particular, we have . Since is a net in , we conclude that .  Note: the argument for the forward direction uses the axiom of choice potentially. If that bugs you, consider the following alternative: let with quasiordering . (This is no longer a partial ordering necessarily.) Define as . This net also converges to .    Assume is continuous and is a net satisfying . Given any open set containing , the net is eventually in , since this is an open set containing . But then clearly is eventually in .  Inversely, if is not continuous, then there is an and open set containing such that for all open sets containing , there is an element . Let be the set of all open neighborhoods of with partial ordering given by reverse inclusion, and consider the net , where is the element described above. We have , using a similar argument as in (1), and yet . Indeed, by construction the net never lies in the open neighoborhood of .    Assume is Hausdorff and that the net converges to . Given any , pick disjoint open sets containing and , respectively. I claim that is not eventually in . Indeed, since , there is an such that for all . If, similarly, there were a such that for all , then we could find an index satisfying and , in which case . Contradiction! We conclude that is not eventually in , and hence that does not converge to .  Now assume that is not Hausdorff, as witnessed by elements : this means for all open sets containing and , respectively, we have have . Let be the set of all triples , where are open neighborhoods of and , respectively, and . Declare if and only if and . The set is directed: given , we can take , for some . Now, let be the net in defined as follows: given , define . I claim that and . Indeed given any open set containing and open set containing , let for some choice of . For any we have . Thus is eventually in and eventually in , as desired.        Subnets   Let and be quasiordered sets. An order-preserving map is a function satisfying the following property: if , then .  Let be a net in . A subnet of is a net of the form , where is a directed set, and is an order-preserving map, and the image is cofinal in . Using tuple notation, we will write for the subnet .     Limit points of nets   Let be a topological space, and let be a net in . An element is a limit point of if and only if there is a subnet of converging to .    Let be a limit point of the net . By definition of limit point, the collection of all open neighborhoods of satisfies condition (i) of Kelley's lemma ; condition (ii) follows from properties of open sets. We conclude that there is a subnet which is eventually in for all open sets containing , and thus that this subnet converges to .  Assume is not a limit point of . Let be an open neighborhood of such that is not cofinal; then there exists an such that for all with . Let be a subnet of . We can write . I claim that . Indeed, since is cofinal in we can find a such that , in which case for all all we have , and thus . This shows that in fact is eventually in ; in particular it is definitely not eventually in .     Kelley's lemma   Let be a net. If is a nonempty collection of subsets of satisfying the conditions   for all the set is cofinal,    for all there is an such that ,   then there is a subnet of which is eventually in for all .    Assume is a collection of subsets of satisfying conditions (i)-(ii). Define to be the set of pairs where and . Given , , we declare if and only if and . It is clear that this is a quasiordering. We now show is directed. Given and , by property (ii) there is an such that . Since is cofinal, there is an such that , and . Setting , we see that and .  Define as . It is clear that is order preserving. We show that is cofinal in . Given any , pick any . Since is cofinal, there is an such that . We have .  Lastly, we show that the subnet is eventually in for all . Indeed, given , let for any . If for , then we have and . It follows that . This proves for all , and thus that is eventually in .    "
},
{
  "id": "d_partial_order",
  "level": "2",
  "url": "s_nets.html#d_partial_order",
  "type": "Definition",
  "number": "1.24.1",
  "title": "Partial ordering axioms.",
  "body": " Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   The relation is a quasiordering (or preordering ) if it satisfies axioms PO1 and PO2. When is a partial ordering or a quasiordering, we will often write for .  A partially ordered set (POSET, for short) is a pair , where is a partial ordering on . Similarly,a quasiordered set is a pair , where is a a quasiordering on .   "
},
{
  "id": "eg_poset",
  "level": "2",
  "url": "s_nets.html#eg_poset",
  "type": "Example",
  "number": "1.24.2",
  "title": "Common examples.",
  "body": " Common examples     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    For an element in a topological space the set of all open neighborhoods of is a partially ordered set under reverse inclusion: , .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a quasiordering on , but not a partial ordering: and , but . The same relation does define a partial ordering on .     "
},
{
  "id": "d_directed_set",
  "level": "2",
  "url": "s_nets.html#d_directed_set",
  "type": "Definition",
  "number": "1.24.3",
  "title": "Directed set.",
  "body": " Directed set   A directed set is a pair , where is a quasiordering on that satisfies the following axiom.   Directed (D)  For all , there is a such that and .   A subset of a directed set is cofinal if for all there is a such that .   "
},
{
  "id": "example-66",
  "level": "2",
  "url": "s_nets.html#example-66",
  "type": "Example",
  "number": "1.24.4",
  "title": "Common examples.",
  "body": " Common examples  Each quasiordered (and\/or partially ordered) set in is easily seen to satisfy the further axiom (D), and is thus a directed set.  "
},
{
  "id": "d_nets",
  "level": "2",
  "url": "s_nets.html#d_nets",
  "type": "Definition",
  "number": "1.24.5",
  "title": "Nets and convergent nets.",
  "body": " Nets and convergent nets   Let be a set. A net in is a function where is a directed set. In particular, a net is a tuple, and accordingly we may use the coordinate notation , where .  A net is eventually in a subset if there is an element such that for all .  Assume is a topological space. A net  converges to an element , denoted , if for all open sets containing the net is eventually in .  A net is cofinally in a subset if the set is cofinal: equivalently, if for all there is a such that .  An element is a limit point of the net if is cofinally in every open neighborhood of .   "
},
{
  "id": "eg_Riemann_integral",
  "level": "2",
  "url": "s_nets.html#eg_Riemann_integral",
  "type": "Example",
  "number": "1.24.6",
  "title": "Riemann integral.",
  "body": " Riemann integral  A careful examination of the Riemann integral of a function over an interval reveals that it is a statement about a convergent net. Indeed, let be the set of all pointed partitions of into subintervals: , an element of is a pair , where is a subinterval partition and is a choice of sample points in each subinterval of . The relation is a quasiordering on satisfying (D). To any function we can associate the net , where for each we define to be the corresponding Riemann sum of . The Riemann integral exists and is equal to if and only the net converges to .  "
},
{
  "id": "th_nets_topology",
  "level": "2",
  "url": "s_nets.html#th_nets_topology",
  "type": "Theorem",
  "number": "1.24.7",
  "title": "Nets and topology.",
  "body": " Nets and topology   Let be a topological space.   The closure of any set is the set of all for which there is a net such that .  It follows that a subset is closed if and only if it contains all limits of all convergent nets in .    A function is continuous if and only if for all convergent nets the net is convergent.    The space is Hausdorff if and only if every net in converges to at most one element in .          Assume . For all open sets containing , choose . Let be the set of all open neighborhoods of , considered as a directed set with reverse inclusion. Define as . The net converges to . Indeed, for any open set containing , we set : if , then (by definition of our ordering), and hence .  Assume for some net in . Given any open set containing , there is an such that for all . In particular, we have . Since is a net in , we conclude that .  Note: the argument for the forward direction uses the axiom of choice potentially. If that bugs you, consider the following alternative: let with quasiordering . (This is no longer a partial ordering necessarily.) Define as . This net also converges to .    Assume is continuous and is a net satisfying . Given any open set containing , the net is eventually in , since this is an open set containing . But then clearly is eventually in .  Inversely, if is not continuous, then there is an and open set containing such that for all open sets containing , there is an element . Let be the set of all open neighborhoods of with partial ordering given by reverse inclusion, and consider the net , where is the element described above. We have , using a similar argument as in (1), and yet . Indeed, by construction the net never lies in the open neighoborhood of .    Assume is Hausdorff and that the net converges to . Given any , pick disjoint open sets containing and , respectively. I claim that is not eventually in . Indeed, since , there is an such that for all . If, similarly, there were a such that for all , then we could find an index satisfying and , in which case . Contradiction! We conclude that is not eventually in , and hence that does not converge to .  Now assume that is not Hausdorff, as witnessed by elements : this means for all open sets containing and , respectively, we have have . Let be the set of all triples , where are open neighborhoods of and , respectively, and . Declare if and only if and . The set is directed: given , we can take , for some . Now, let be the net in defined as follows: given , define . I claim that and . Indeed given any open set containing and open set containing , let for some choice of . For any we have . Thus is eventually in and eventually in , as desired.      "
},
{
  "id": "d_order_preserving_subnets",
  "level": "2",
  "url": "s_nets.html#d_order_preserving_subnets",
  "type": "Definition",
  "number": "1.24.8",
  "title": "Subnets.",
  "body": " Subnets   Let and be quasiordered sets. An order-preserving map is a function satisfying the following property: if , then .  Let be a net in . A subnet of is a net of the form , where is a directed set, and is an order-preserving map, and the image is cofinal in . Using tuple notation, we will write for the subnet .   "
},
{
  "id": "th_nets_limit_points",
  "level": "2",
  "url": "s_nets.html#th_nets_limit_points",
  "type": "Theorem",
  "number": "1.24.9",
  "title": "Limit points of nets.",
  "body": " Limit points of nets   Let be a topological space, and let be a net in . An element is a limit point of if and only if there is a subnet of converging to .    Let be a limit point of the net . By definition of limit point, the collection of all open neighborhoods of satisfies condition (i) of Kelley's lemma ; condition (ii) follows from properties of open sets. We conclude that there is a subnet which is eventually in for all open sets containing , and thus that this subnet converges to .  Assume is not a limit point of . Let be an open neighborhood of such that is not cofinal; then there exists an such that for all with . Let be a subnet of . We can write . I claim that . Indeed, since is cofinal in we can find a such that , in which case for all all we have , and thus . This shows that in fact is eventually in ; in particular it is definitely not eventually in .   "
},
{
  "id": "lem_Kelleys_lemma",
  "level": "2",
  "url": "s_nets.html#lem_Kelleys_lemma",
  "type": "Lemma",
  "number": "1.24.10",
  "title": "Kelley's lemma.",
  "body": " Kelley's lemma   Let be a net. If is a nonempty collection of subsets of satisfying the conditions   for all the set is cofinal,    for all there is an such that ,   then there is a subnet of which is eventually in for all .    Assume is a collection of subsets of satisfying conditions (i)-(ii). Define to be the set of pairs where and . Given , , we declare if and only if and . It is clear that this is a quasiordering. We now show is directed. Given and , by property (ii) there is an such that . Since is cofinal, there is an such that , and . Setting , we see that and .  Define as . It is clear that is order preserving. We show that is cofinal in . Given any , pick any . Since is cofinal, there is an such that . We have .  Lastly, we show that the subnet is eventually in for all . Indeed, given , let for any . If for , then we have and . It follows that . This proves for all , and thus that is eventually in .   "
},
{
  "id": "s_Tychonoff",
  "level": "1",
  "url": "s_Tychonoff.html",
  "type": "Section",
  "number": "1.25",
  "title": "Tychonoff theorem via nets",
  "body": " Tychonoff theorem via nets   Our main application of the theory of nets is (a) to give a characterization of comapctness in terms of convergence and limit points of nets ( ), and (b) to use this characterization to prove the Tychonoff theorem     Nets and compactness   Nets and compactness   Let be a topological space. The following statements are equivalent.    is compact.    Every net in has a limit point.    Every net in has a convergent subnet.       Statements (ii) and (iii) are immediately seen to be equivalent thanks to . We will show that (i) and (ii) are equivalent.   Implication: (i) (ii)  Let be a net in . For each define . Clearly each is closed and nonempty. Furthermore, for any finite collection we have , since we can find a such that for all , and hence . Since is assumed to be compact, there is an element . We show that is a limit point of .    Implication: (ii) (i)  We prove the contrapositive. Suppose is not compact, and let be a cover with no finite cover. Define to the be the set of all pairs , where is a finite subset of and . (Note that since has no finite subcover.) It is easy to see that is a directed set under the quasiordering defined as if and only if . Define the net as .       Tychonoff's theorem   We now give a proof of Tychonoff's theorem using nets. The first such proof was given by UC Berkeley mathematician John L. Kelley in his 1950 paper Convergence in topology . Our proof draws from a couple of slight improvements to Kelley's original argument, both proffered by additional UC Berkeley mathematicians. (Go Bears!) Paul Chernoff's A simple proof of Tychonoff's theorem via nets removed the need for universal nets in Kelley's argument; Charles Pugh is credited for , which removes the argument's reliance on subnets. All of these various proofs invoke Zorn's lemma , which as it turns out is equivalent to the axiom of choice. You may be asking: Is there a proof of the Tychonoff theorem that does not rely on the axiom of choice? Amazingly, the answer is no! In fact, Kelley himself proved that Tychonoff's theorem is equivalent to the axiom of choice in another paper from 1950: The Tychonoff product theorem implies the axiom of choice . His argument is simply too elegant not to include here.    Tychonoff implies AC (Kelley)   If Tychonoff's theorem is true, then the axiom of choice is true.    Assume Tychonoff's theorem is true. We will prove the following equivalent formulation of the axiom of choice: . Given a collection of nonempty sets, let the the result of adding one additional point, , to each . Why do we do this? We can with assurance that the product is nonempty since the is an element of . We will use Tychonoff's theorem to show that is a nonempty subset of . To do so, we need to give the sets a compact topological structure: this is accomplished by declaring the topology on to be . (Check that this is a topology.) This clearly makes compact, since only contains four open sets. Note also that is closed with respect to this topology.  Since each is compact, by Tychonoff's theorem so is . For each , let be the th projection map and define . Since is closed in , and since is continuous, the set is closed for each . Furthermore given any finite set , the set is nonempty: indeed, by the finite axiom of choice principle (which is implied by ZF set theory) there exists a tuple , and thus the element defined as is an element of . Now since is compact, we have , using the finite intersection characterization of compactness. But clearly . Thus .    Now on to a net-based proof of Tychonoff's theorem. As mentioned we use Zorn's lemma, the statement of which involves some extra jargon.   Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .     Zorn's lemma   Let be a partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    As stated above, Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts.    Lastly, before moving to the main attraction, we record a useful lemma that will simplify our main argument. The proof idea, due to Charles Pugh, avoids all mention of subnets, providing a path to proving Tychonoff's theorem that does not require subnets. There is a fairly direct alternative proof of the lemma using convergent subnets. See if you can figure it out!   Nets in products   Let be topological spaces, and assume is compact. Let is a net in . Let be the projection onto map. If is a limit point of the net , then there is a such that is a limit point of .    Let be a limit point of . Define to be the set of all pairs , where is an open neighborhood of , and . For elements we declare if and only if and . It is easy to see that is a partially ordered set with respect to this ordering. To see that it is directed, given indices and in , since is a limit point of , we can find a where and . This satisfies and , as desired.  Now define the net as . (Recall, our original net is .) Since is compact, the net has a limit point . We claim that is a limit point of our original net . To prove this, it is enough to show that given any basic opens set containing , and any , we can find an index such that . Given containing and index , first pick an index such that . This is possible since is a limit point of . By definition the pair is an element of . Since is a limit point of the net , and since is an open neighborhood of , we can find an element such that and . By definition of and its partial ordering, we have , , and . We conclude that , as desired.     Tychonoff theorem   Given any collection of compact spaces the product space is compact.    Proof (following P. Chernoff)  We show that any net in has a limit point . In an effort to distinguish between the different types of tuple objects at play here, I will exclusively use tuple notation for nets and exclusively use function notation for elements of . This is already in force above: the net specifies an element for each index ; but each is itself a function satisfying .  Now define to be the set of all pairs , where and is a limit point of the net . Note how we are exploiting the function notation here: since elements of are just functions with domain , restricting the domain yields a map from to defined as . This map is in fact just the projection map defined as . It follows from this that this map is continuous.  Next, we define the relation on as follows: if and only if and . It is easy to see that is a partial ordering. We now proceed in two steps: (1) we will show that satisfies the conditions of Zorn's lemma, and hence that it has a maximal element ; (2) we will show that and hence that is a limit point of . It then follows that is compact, as desired.   Step 1: has a maximal element  First observe that is nonempty. Indeed, given any , the net is just a net in the compact space , and hence has a limit point . It follows that . (There is a slight subtlety here, which is that the space is homeomorphic to the (somewhat funny looking) product space via the map .)  Next we show that any chain in has an upper bound in . To this end, given any chain in , we define as follows:    ;    the function is defined as , where is any element of for which .   First observe that is a well-defined function: if , where , then since is a chain either or ; assuming without loss of generality that we have by definition, and hence that . Next we must show that , understood as an element of , is a limit point of the net . Using the usual product topology basis, it suffices to show that given any finite set and open set of the form , and given any , there is an such that . Since is finite, we have for some sets satisfying . Since is a chain, there is an index such that for all . Thus we may assume there is an element such that . By definition is a limit point of the net . Since , it follows that . Thus there is an such that . It follows easily that . This proves is a limit point of , and hence that . It is clear from the definition of , that it is an upper bound of .  Having shown that satisfies the chain condition for Zorn's lemma, we conclude that it contains a maximal element .    Step 2:  Let be a maximal element of , so that is a limit point of the net . We show that and hence that is a limit point of .  Assume by contradiction that , and let . Since is compact, by the net in has a limit point of the form . But then the element defined as and satisfies and , contradicting the fact that is a maximal element.       "
},
{
  "id": "th_nets_compactness",
  "level": "2",
  "url": "s_Tychonoff.html#th_nets_compactness",
  "type": "Theorem",
  "number": "1.25.1",
  "title": "Nets and compactness.",
  "body": " Nets and compactness   Let be a topological space. The following statements are equivalent.    is compact.    Every net in has a limit point.    Every net in has a convergent subnet.       Statements (ii) and (iii) are immediately seen to be equivalent thanks to . We will show that (i) and (ii) are equivalent.   Implication: (i) (ii)  Let be a net in . For each define . Clearly each is closed and nonempty. Furthermore, for any finite collection we have , since we can find a such that for all , and hence . Since is assumed to be compact, there is an element . We show that is a limit point of .    Implication: (ii) (i)  We prove the contrapositive. Suppose is not compact, and let be a cover with no finite cover. Define to the be the set of all pairs , where is a finite subset of and . (Note that since has no finite subcover.) It is easy to see that is a directed set under the quasiordering defined as if and only if . Define the net as .    "
},
{
  "id": "th_Tychonoff_choice",
  "level": "2",
  "url": "s_Tychonoff.html#th_Tychonoff_choice",
  "type": "Theorem",
  "number": "1.25.2",
  "title": "Tychonoff implies AC (Kelley).",
  "body": " Tychonoff implies AC (Kelley)   If Tychonoff's theorem is true, then the axiom of choice is true.    Assume Tychonoff's theorem is true. We will prove the following equivalent formulation of the axiom of choice: . Given a collection of nonempty sets, let the the result of adding one additional point, , to each . Why do we do this? We can with assurance that the product is nonempty since the is an element of . We will use Tychonoff's theorem to show that is a nonempty subset of . To do so, we need to give the sets a compact topological structure: this is accomplished by declaring the topology on to be . (Check that this is a topology.) This clearly makes compact, since only contains four open sets. Note also that is closed with respect to this topology.  Since each is compact, by Tychonoff's theorem so is . For each , let be the th projection map and define . Since is closed in , and since is continuous, the set is closed for each . Furthermore given any finite set , the set is nonempty: indeed, by the finite axiom of choice principle (which is implied by ZF set theory) there exists a tuple , and thus the element defined as is an element of . Now since is compact, we have , using the finite intersection characterization of compactness. But clearly . Thus .   "
},
{
  "id": "d_chain",
  "level": "2",
  "url": "s_Tychonoff.html#d_chain",
  "type": "Definition",
  "number": "1.25.3",
  "title": "Upper bounds, maximal elements, chains.",
  "body": " Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .   "
},
{
  "id": "th_Zorns_lemma",
  "level": "2",
  "url": "s_Tychonoff.html#th_Zorns_lemma",
  "type": "Theorem",
  "number": "1.25.4",
  "title": "Zorn's lemma.",
  "body": " Zorn's lemma   Let be a partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    As stated above, Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts.   "
},
{
  "id": "lemma_product_nets",
  "level": "2",
  "url": "s_Tychonoff.html#lemma_product_nets",
  "type": "Lemma",
  "number": "1.25.5",
  "title": "Nets in products.",
  "body": " Nets in products   Let be topological spaces, and assume is compact. Let is a net in . Let be the projection onto map. If is a limit point of the net , then there is a such that is a limit point of .    Let be a limit point of . Define to be the set of all pairs , where is an open neighborhood of , and . For elements we declare if and only if and . It is easy to see that is a partially ordered set with respect to this ordering. To see that it is directed, given indices and in , since is a limit point of , we can find a where and . This satisfies and , as desired.  Now define the net as . (Recall, our original net is .) Since is compact, the net has a limit point . We claim that is a limit point of our original net . To prove this, it is enough to show that given any basic opens set containing , and any , we can find an index such that . Given containing and index , first pick an index such that . This is possible since is a limit point of . By definition the pair is an element of . Since is a limit point of the net , and since is an open neighborhood of , we can find an element such that and . By definition of and its partial ordering, we have , , and . We conclude that , as desired.   "
},
{
  "id": "th_Tychonoff_general",
  "level": "2",
  "url": "s_Tychonoff.html#th_Tychonoff_general",
  "type": "Theorem",
  "number": "1.25.6",
  "title": "Tychonoff theorem.",
  "body": " Tychonoff theorem   Given any collection of compact spaces the product space is compact.    Proof (following P. Chernoff)  We show that any net in has a limit point . In an effort to distinguish between the different types of tuple objects at play here, I will exclusively use tuple notation for nets and exclusively use function notation for elements of . This is already in force above: the net specifies an element for each index ; but each is itself a function satisfying .  Now define to be the set of all pairs , where and is a limit point of the net . Note how we are exploiting the function notation here: since elements of are just functions with domain , restricting the domain yields a map from to defined as . This map is in fact just the projection map defined as . It follows from this that this map is continuous.  Next, we define the relation on as follows: if and only if and . It is easy to see that is a partial ordering. We now proceed in two steps: (1) we will show that satisfies the conditions of Zorn's lemma, and hence that it has a maximal element ; (2) we will show that and hence that is a limit point of . It then follows that is compact, as desired.   Step 1: has a maximal element  First observe that is nonempty. Indeed, given any , the net is just a net in the compact space , and hence has a limit point . It follows that . (There is a slight subtlety here, which is that the space is homeomorphic to the (somewhat funny looking) product space via the map .)  Next we show that any chain in has an upper bound in . To this end, given any chain in , we define as follows:    ;    the function is defined as , where is any element of for which .   First observe that is a well-defined function: if , where , then since is a chain either or ; assuming without loss of generality that we have by definition, and hence that . Next we must show that , understood as an element of , is a limit point of the net . Using the usual product topology basis, it suffices to show that given any finite set and open set of the form , and given any , there is an such that . Since is finite, we have for some sets satisfying . Since is a chain, there is an index such that for all . Thus we may assume there is an element such that . By definition is a limit point of the net . Since , it follows that . Thus there is an such that . It follows easily that . This proves is a limit point of , and hence that . It is clear from the definition of , that it is an upper bound of .  Having shown that satisfies the chain condition for Zorn's lemma, we conclude that it contains a maximal element .    Step 2:  Let be a maximal element of , so that is a limit point of the net . We show that and hence that is a limit point of .  Assume by contradiction that , and let . Since is compact, by the net in has a limit point of the form . But then the element defined as and satisfies and , contradicting the fact that is a maximal element.    "
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
