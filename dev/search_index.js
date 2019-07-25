var documenterSearchIndex = {"docs":
[{"location":"api/#CryptoUtils-1","page":"Functions","title":"CryptoUtils","text":"","category":"section"},{"location":"api/#Number-to-bytes-conversion-1","page":"Functions","title":"Number to bytes conversion","text":"","category":"section"},{"location":"api/#","page":"Functions","title":"Functions","text":"CryptoUtils.b2n\nCryptoUtils.n2b","category":"page"},{"location":"api/#CryptoUtils.b2n","page":"Functions","title":"CryptoUtils.b2n","text":"b2n(str::String) -> BigInt\n\nConverts a byte-string to a number, converting the string from base 256 to base 10.\n\njulia> b2n(\"Hello world!\")\n22405534230753963835153736737\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.n2b","page":"Functions","title":"CryptoUtils.n2b","text":"n2b(n::Integer) -> String\n\nConverts a number to its bytes representation, effectively writing the number in base 256, and returning the corresponding bytes.\n\njulia> n2b(22405534230753963835153736737)\n\"Hello world!\"\n\n\n\n\n\n","category":"function"},{"location":"api/#Prime-numbers-1","page":"Functions","title":"Prime numbers","text":"","category":"section"},{"location":"api/#","page":"Functions","title":"Functions","text":"CryptoUtils.random_prime\nCryptoUtils.safe_prime\nCryptoUtils.tower_two_prime\nCryptoUtils.get_first_primes","category":"page"},{"location":"api/#CryptoUtils.random_prime","page":"Functions","title":"CryptoUtils.random_prime","text":"random_prime(bitsize::Integer) -> BigInt\n\nReturn a random prime with bitsize bits.\n\njulia> random_prime(42)\n2458636110727\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.safe_prime","page":"Functions","title":"CryptoUtils.safe_prime","text":"safe_prime(bitsize::Integer) -> BigInt\n\nReturn a random safe-prime q of the form q = 2 * p + 1 where p is also a prime number. The returning prime number has bitsize bits.\n\njulia> safe_prime(10)\n1439\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.tower_two_prime","page":"Functions","title":"CryptoUtils.tower_two_prime","text":"tower_two_prime(bitsize::Integer, tower_len::Integer) -> BigInt\n\nReturn a random prime of the form 2^towerlen * q + 1 with bitsize bits and where q is also a prime.\n\njulia> tower_two_prime(22, 6)\n2362433\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.get_first_primes","page":"Functions","title":"CryptoUtils.get_first_primes","text":"get_first_primes(k::Integer) -> Collection\n\nOutput the first k prime numbers\n\njulia> get_first_primes(10)\n10-element Array{Int64,1}:\n  2\n  3\n  5\n  7\n 11\n 13\n 17\n 19\n 23\n 29\n\n\n\n\n\n","category":"function"},{"location":"api/#Number-theory-1","page":"Functions","title":"Number theory","text":"","category":"section"},{"location":"api/#","page":"Functions","title":"Functions","text":"CryptoUtils.find_quadratic_non_residue\nCryptoUtils.hoc_sqrt\nCryptoUtils.is_quadratic_residue\nCryptoUtils.jacobi\nCryptoUtils.legendre\nCryptoUtils.sqrt_mod_prime\nCryptoUtils.tonelli_shanks","category":"page"},{"location":"api/#CryptoUtils.find_quadratic_non_residue","page":"Functions","title":"CryptoUtils.find_quadratic_non_residue","text":"find_quadratic_non_residue(p::Integer)\n\nReturn a random number R which has no square root mod p, i.e., x^2 == R mod p has no solutions.\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.hoc_sqrt","page":"Functions","title":"CryptoUtils.hoc_sqrt","text":"hoc_sqrt(a::Integer, p::Integer)\n\nAlgorithm from Handbook of cryptography, Koblitz pp 48-49. Finds a solution to x^2 == a mod p.\n\nIt assumes such solution exists.\n\nRunning time highly depends on |alpha|, assuming p-1 = 2^alpha * s, for an odd s.\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.is_quadratic_residue","page":"Functions","title":"CryptoUtils.is_quadratic_residue","text":"is_quadratic_residue(a::Integer, p::Integer) -> Bool\n\nReturn true or false depending on wheter a is a quadratic residue mod p.\n\nThat is, it checks if x^2 == a mod p has solutions.\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.jacobi","page":"Functions","title":"CryptoUtils.jacobi","text":"jacobi(n::Integer, k::Integer)\n\nReturn the Jacobi symbol of n, k.\n\nk should be an odd number.\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.legendre","page":"Functions","title":"CryptoUtils.legendre","text":"legendre(a::Integer, p::Integer)\n\nReturn the Legendre symbol of (a, p).\n\np should be an odd prime number.\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.sqrt_mod_prime","page":"Functions","title":"CryptoUtils.sqrt_mod_prime","text":"sqrt_mod_prime(a::Integer, p::Integer) -> Integer\n\nSolves x^2 == a mod p and returns one of the square roots r. The other root is p - r. If there are no solutions, throws an exception.\n\njulia> sqrt_mod_prime(33^2, 73)\n33\n\n\n\n\n\n","category":"function"},{"location":"api/#CryptoUtils.tonelli_shanks","page":"Functions","title":"CryptoUtils.tonelli_shanks","text":"tonelli_shanks(a::Integer, p::Integer)\n\nImplements the Tonelli Shanks algorithm for computing square roots modulo a prime number.\n\nIt assumes such square roots exist.\n\n\n\n\n\n","category":"function"},{"location":"api/#Cryptography-1","page":"Functions","title":"Cryptography","text":"","category":"section"},{"location":"api/#","page":"Functions","title":"Functions","text":"CryptoUtils.factor_with_ed","category":"page"},{"location":"api/#CryptoUtils.factor_with_ed","page":"Functions","title":"CryptoUtils.factor_with_ed","text":"factor_with_ed(n::Integer, e::Integer, d::Integer) -> (Integer, Integer)\n\nFactors n = p*q given (e, d) such that e*d = 1 mod phi(n) Stinson page 204 - algorithm 5.10\n\n\n\n\n\n","category":"function"},{"location":"#CryptoUtils.jl-1","page":"Home","title":"CryptoUtils.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package supports a number of cryptographic and number theory related primitives:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"generation of random prime numbers and safe primes;\ncomputing Jacobi and Legendre symbols;\ncomputing modular square roots;\n\"bytes to number\" and \"number to bytes\" conversion.","category":"page"},{"location":"#Index-1","page":"Home","title":"Index","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"}]
}
