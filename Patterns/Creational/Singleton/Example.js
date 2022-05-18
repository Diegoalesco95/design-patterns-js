/*  Since implementing a singleton is easy, you have a different challenge:
write a function called isSingleton(). This methods takes a factory (i.e., a function
that returns an object); it's uo to you determine whether or not that
object is a singleton intance or not.
*/

class SingletonTester {
	static isSingleton(generator) {
		// todo
		let object1 = generator();
		let object2 = generator();

		return object1 === object2;
	}
}

module.exports = SingletonTester;
