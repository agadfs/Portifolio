
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />

        <Skills />


      </div>
      <div id="learn-more" className=" min-[600px]:mt-[100px]  text-lg text-gray-400 h-auto mx-20  max-[600px]:text-center  max-[600px]:mx-4 
        
        " >

        Currently, i have changed my undergraduation to computer science and i am seeking
        the opportunity to contribute to my professional development. Although I do not yet
        possess a higher education degree in the field, I am committed to seeking knowledge and continuous improvement.
        I plan to enroll in a higher education or technology course to strengthen my educational
        foundation and deepen my understanding of the challenges and opportunities inherent in this dynamic industry.
        I have knowledge in languages such as TypeScript, JavaScript, C++, and Python.
        My aim is to further specialize in the first two and develop my skills in them.
        In this same way, i believe I have the capability to perform well in the position, along with the
        determination to achieve goals and meet objectives. I am committed to balancing my professional
        responsibilities with academic studies, striving for a harmonious approach
        to succeed both in the workplace and in my ongoing pursuit of knowledge and expertise in programming.

      </div>
    
    </main>
  );
}
