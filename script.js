class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
     console.log(this.name);
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  class Manager extends Employee {
    constructor(name, jobDescription, Education, salary, hireDate) {
        super(name, salary, hireDate);
        this._jobDescription = jobDescription;
        this._Education = Education;
  }
    get JobInfo() {
      console.log(this._jobDescription);
    }
    get EducationBackground() {
      console.log(this._Education);
    }
  }
  class Designer extends Employee {
    constructor(name, jobDescription, Education, salary, hireDate) {
        super(name, salary, hireDate);
        this._jobDescription = jobDescription;
        this._Education = Education;
    }
    get JobInfo() {
      console.log(this._jobDescription);
    }
    get EducationBackground() {
      console.log(this._Education);
    }
    
  }
  class SalesAssociate extends Employee {
    constructor(name, jobDescription, Education, salary, hireDate) {
        super(name, salary, hireDate);
        this._jobDescription = jobDescription;
        this._Education = Education;
    }
    get JobInfo() {
      console.log(this._jobDescription);
    }
    get EducationBackground() {
      console.log(this._Education);
    }
    
  }
  
let Associate1 = new Manager("Charles Thompson", "Manager Associate", "Princeton University", 105000, "08/08/2010");
let Associate2 = new Designer("Christie Jacobsen", "Designer Associate", "Clemson University", 62500, "07/15/2013");
let Associate3 = new SalesAssociate("Orlando Gibson", "Sales Representative", "UNC Chapel Hill", 40500, "11/22/2016");

Associate1.getName();
Associate1.JobInfo;
Associate1.getSalary();
Associate1.getHireDate();
Associate1.EducationBackground;

Associate2.getName();
Associate2.JobInfo;
Associate2.getSalary();
Associate2.getHireDate();
Associate2.EducationBackground;

Associate3.getName();
Associate3.JobInfo;
Associate3.getSalary();
Associate3.getHireDate();
Associate3.EducationBackground;




