import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Button from "../Button";
import Modal from "../ui/Modal";
import { Accordion, AccordionItem } from "../ui/Accordian";

const AdminLayout = () => {
  const [modal,setModal]=useState(false)
  return (
    <div className="flex">
      <div className="flex-[1]">
      <h1>Admin Dashborad</h1>
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
      <Button
        onClick={() => setModal((prev) => !prev)}
        variant="solid"
        title="Open Modal"
        className={`${modal ? "invisible" : "visible"}`}
      >
        Click Meh
      </Button>
      <Modal modal={modal} setModal={setModal}>
      
        <div className="">
        <Accordion >
          <AccordionItem title="Why you are so beautiful?">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit cumque neque tempora aspernatur ratione ullam ipsum
              vero impedit quibusdam commodi optio accusamus iusto praesentium
              dicta ipsa blanditiis laudantium omnis illum pariatur labore,
              repellendus provident quo sapiente inventore? Placeat sint,
              mollitia fugit excepturi quae ad recusandae ullam quo consequuntur
              illo quos labore sit fugiat obcaecati a provident nam repudiandae
              maiores aliquam velit dolore iste facere iure debitis. Sunt fugit
              beatae hic pariatur sapiente, quas iure est esse deleniti, rerum
              quia temporibus corporis reiciendis iusto totam explicabo
              praesentium ab eveniet incidunt cumque? Adipisci, voluptate
              pariatur rem aliquid culpa debitis illo corrupti, quia repellat
              sint mollitia saepe, architecto magni dolore. Fuga, architecto
              alias? Aut nihil explicabo sit exercitationem aliquam, impedit
              illum ipsa nostrum quae. Doloribus recusandae, at optio provident
              quos vitae. Ipsum temporibus optio mollitia doloremque quod, ea at
              quasi, recusandae deleniti hic, in alias ullam! Porro accusamus
              quasi culpa quo ab suscipit autem dolorum, nam quaerat quia labore
              laudantium mollitia distinctio, fuga blanditiis sint? Blanditiis
              quibusdam fugit quos adipisci animi, labore minima totam, sed
              tempore consectetur illum officia dicta exercitationem aspernatur
              ab omnis fuga optio consequuntur distinctio eos perspiciatis
              placeat, nesciunt quod natus. Officiis, unde! Tenetur quod fuga,
              ea dolores totam ad reprehenderit ex sint corporis facilis, quia,
              rerum quae voluptate. Architecto qui nam cumque dolorem, beatae
              explicabo neque distinctio veritatis consectetur reiciendis dolor
              blanditiis est atque, cum natus, assumenda corporis! Vitae earum
              dolor corrupti blanditiis eaque optio, tempore doloremque
              exercitationem quisquam nemo rem explicabo odio commodi ex laborum
              quasi, reprehenderit corporis, dolore rerum libero aliquid magni?
              Cum id, quam, at expedita blanditiis enim soluta itaque fuga ad
              repudiandae laudantium. Mollitia optio similique unde incidunt
              atque aperiam facilis cum eaque nemo dolore pariatur sequi
              architecto dolor impedit doloremque assumenda at tempora cumque
              ratione eius ullam eum ipsa, hic ea! Vero tempore corporis
              necessitatibus possimus facere, esse minima ea modi enim
              consequuntur quis nam maiores eius, est sed aspernatur provident
              quod ipsum, doloribus laudantium. Nulla architecto sapiente cumque
              vero, tenetur dicta corporis placeat officiis explicabo dolorem
              voluptatem laborum consequatur, harum saepe obcaecati nemo
              asperiores dolores odit itaque facilis reiciendis repellendus
              praesentium in dolor. Exercitationem, nesciunt ab. Mollitia
              perferendis cupiditate alias ea harum esse asperiores laborum
              dignissimos, dolorum aut totam expedita perspiciatis officiis
              tempora veniam adipisci animi ipsa odio debitis molestias,
              temporibus sunt minus! Eum necessitatibus officiis ab deserunt
              natus excepturi iure. Cum quaerat voluptas accusamus quod ut
              libero vitae totam! Perspiciatis, deleniti laborum, expedita
              veritatis labore neque nesciunt nemo harum eos, minima nulla.
              Provident sunt facere soluta vero porro nulla consequuntur
              recusandae hic est molestias vel repudiandae blanditiis ea
              delectus, quidem a laborum officia rem numquam, officiis maxime
              impedit quas sed! Unde suscipit consectetur, accusamus, corporis
              iure voluptatibus alias facilis minus ducimus ullam vitae atque
              incidunt ut consequuntur quisquam rem! Doloremque, placeat. Sit
              quam soluta sapiente esse, voluptatum temporibus aliquam veniam
              expedita ea libero, eveniet commodi nesciunt? Dolor iure cum iusto
              eius pariatur vitae culpa tempora delectus magnam voluptatibus
              officiis consequuntur impedit distinctio, error enim recusandae
              debitis quaerat a minus facere, accusamus voluptatum..
            </p>
          </AccordionItem>
          <AccordionItem title="Why you are so beautiful?">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit cumque neque tempora aspernatur ratione ullam ipsum
              vero impedit quibusdam commodi optio accusamus iusto praesentium
              dicta ipsa blanditiis laudantium omnis illum pariatur labore,
              repellendus provident quo sapiente inventore? Placeat sint,
              mollitia fugit excepturi quae ad recusandae ullam quo consequuntur
              illo quos labore sit fugiat obcaecati a provident nam repudiandae
              maiores aliquam velit dolore iste facere iure debitis. Sunt fugit
              beatae hic pariatur sapiente, quas iure est esse deleniti, rerum
              quia temporibus corporis reiciendis iusto totam explicabo
              praesentium ab eveniet incidunt cumque? Adipisci, voluptate
              pariatur rem aliquid culpa debitis illo corrupti, quia repellat
              sint mollitia saepe, architecto magni dolore. Fuga, architecto
              alias? Aut nihil explicabo sit exercitationem aliquam, impedit
              illum ipsa nostrum quae. Doloribus recusandae, at optio provident
              quos vitae. Ipsum temporibus optio mollitia doloremque quod, ea at
              quasi, recusandae deleniti hic, in alias ullam! Porro accusamus
              quasi culpa quo ab suscipit autem dolorum, nam quaerat quia labore
              laudantium mollitia distinctio, fuga blanditiis sint? Blanditiis
              quibusdam fugit quos adipisci animi, labore minima totam, sed
              tempore consectetur illum officia dicta exercitationem aspernatur
              ab omnis fuga optio consequuntur distinctio eos perspiciatis
              placeat, nesciunt quod natus. Officiis, unde! Tenetur quod fuga,
              ea dolores totam ad reprehenderit ex sint corporis facilis, quia,
              rerum quae voluptate. Architecto qui nam cumque dolorem, beatae
              explicabo neque distinctio veritatis consectetur reiciendis dolor
              blanditiis est atque, cum natus, assumenda corporis! Vitae earum
              dolor corrupti blanditiis eaque optio, tempore doloremque
              exercitationem quisquam nemo rem explicabo odio commodi ex laborum
              quasi, reprehenderit corporis, dolore rerum libero aliquid magni?
              Cum id, quam, at expedita blanditiis enim soluta itaque fuga ad
              repudiandae laudantium. Mollitia optio similique unde incidunt
              atque aperiam facilis cum eaque nemo dolore pariatur sequi
              architecto dolor impedit doloremque assumenda at tempora cumque
              ratione eius ullam eum ipsa, hic ea! Vero tempore corporis
              necessitatibus possimus facere, esse minima ea modi enim
              consequuntur quis nam maiores eius, est sed aspernatur provident
              quod ipsum, doloribus laudantium. Nulla architecto sapiente cumque
              vero, tenetur dicta corporis placeat officiis explicabo dolorem
              voluptatem laborum consequatur, harum saepe obcaecati nemo
              asperiores dolores odit itaque facilis reiciendis repellendus
              praesentium in dolor. Exercitationem, nesciunt ab. Mollitia
              perferendis cupiditate alias ea harum esse asperiores laborum
              dignissimos, dolorum aut totam expedita perspiciatis officiis
              tempora veniam adipisci animi ipsa odio debitis molestias,
              temporibus sunt minus! Eum necessitatibus officiis ab deserunt
              natus excepturi iure. Cum quaerat voluptas accusamus quod ut
              libero vitae totam! Perspiciatis, deleniti laborum, expedita
              veritatis labore neque nesciunt nemo harum eos, minima nulla.
              Provident sunt facere soluta vero porro nulla consequuntur
              recusandae hic est molestias vel repudiandae blanditiis ea
              delectus, quidem a laborum officia rem numquam, officiis maxime
              impedit quas sed! Unde suscipit consectetur, accusamus, corporis
              iure voluptatibus alias facilis minus ducimus ullam vitae atque
              incidunt ut consequuntur quisquam rem! Doloremque, placeat. Sit
              quam soluta sapiente esse, voluptatum temporibus aliquam veniam
              expedita ea libero, eveniet commodi nesciunt? Dolor iure cum iusto
              eius pariatur vitae culpa tempora delectus magnam voluptatibus
              officiis consequuntur impedit distinctio, error enim recusandae
              debitis quaerat a minus facere, accusamus voluptatum..
            </p>
          </AccordionItem>
          {/* Add more AccordionItem components as needed */}
        </Accordion>
        </div>
    
      </Modal>
    </div>
  );
};

export default AdminLayout;
