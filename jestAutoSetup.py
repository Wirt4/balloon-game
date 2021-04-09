#assumes copy of script is called in folder to populate
import os
os.system("npm init -y") #create npm environment
os.system("npm i jest --save-dev") #install jest in npm env

package = open("package.json")
guts = package.read()
package.close()

#create new section of json for scripts
pivotOne = guts.index("\"scripts\"")
pivotTwo = guts.index("\"keywords\"")
bunOne = guts[0: pivotOne]
bunTwo = guts[pivotTwo:]
newScripts= "\"scripts\": {\n"
#note this is specific to an address in npm enivronment, subject to change
newScripts+="    \"test\": \"node --experimental-vm-modules node_modules/jest/bin/jest.js\"\n"
newScripts+="  },\n"
newScripts+="\"type\": \"module\",\n"
newScripts+="\"jest\": {\n"
newScripts+="    \"collectCoverage\": true\n"
newScripts+="  },\n"
newGuts = bunOne+newScripts+bunTwo

newPackage = open("package.json", "w")
newPackage.write(newGuts);
newPackage.close()

os.system("mkdir __test__")

#write some boilerplate in the spec
spec = open("__test__/template.spec.js", "w")
spec.write("//remember need to import {function header} from \"./scriptsrc\";\n")
spec.write("describe(\"temp\", () => {\n")
spec.write("  test(\"description of function test\", () => {\n")
spec.write("    expect(basicFunction(2, 2)).toEqual(5);\n")
spec.write("  });\n")
spec.write("});\n")
spec.close()
print ("test created")
