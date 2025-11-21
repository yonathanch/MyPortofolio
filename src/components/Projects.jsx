import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import massageWebsite from "/public/massage-website.jpg";
import emading from "/public/e-mading2.jpg";
import adminBalink from "/public/admin-balink.png";
import jessyFood from "/public/jesyfood1.png";
import realtime_app from "/public/realtime_app.png";
import movie_app from "/public/movie_app.png";
import laravel_blogs from "/public/1-laravelblog.png";

//laravel todolist_apii
import laravel_todolist_api_1 from "/public/output_laraveltodolist_api/1.get(all).png";
import laravel_todolist_api_2 from "/public/output_laraveltodolist_api/2.get(id).png";
import laravel_todolist_api_3 from "/public/output_laraveltodolist_api/3.users_db.png";
import laravel_todolist_api_4 from "/public/output_laraveltodolist_api/4.creatorLogin.png";
import laravel_todolist_api_5 from "/public/output_laraveltodolist_api/5.personal_acces_token_creator.png";
import laravel_todolist_api_6 from "/public/output_laraveltodolist_api/6.add_token_creator_to_create_data.png";
import laravel_todolist_api_7 from "/public/output_laraveltodolist_api/7.create_data_todos.png";
import laravel_todolist_api_8 from "/public/output_laraveltodolist_api/8.create_data_todos.png";
import laravel_todolist_api_9 from "/public/output_laraveltodolist_api/9.gates_todo_update.png";
import laravel_todolist_api_10 from "/public/output_laraveltodolist_api/10.gates_todo_delete.png";
import laravel_todolist_api_11 from "/public/output_laraveltodolist_api/11.logout_creator.png";
import laravel_todolist_api_12 from "/public/output_laraveltodolist_api/12.adminLogin_to_delete_data.png";
import laravel_todolist_api_13 from "/public/output_laraveltodolist_api/13.adminDelete_todos_id31.png";
import laravel_todolist_api_14 from "/public/output_laraveltodolist_api/14.succes_delete.png";


//inventory_app_laravelInertiaVue
import inventoryApp_1 from "/public/output_inventoryapp_laravelinertiavue/1.items.png";
import inventoryApp_2 from "/public/output_inventoryapp_laravelinertiavue/2.items_db.png";
import inventoryApp_3 from "/public/output_inventoryapp_laravelinertiavue/3.create.png";
import inventoryApp_4 from "/public/output_inventoryapp_laravelinertiavue/4.create.png"; // Asumsi nama filenya '4.create.png'
import inventoryApp_5 from "/public/output_inventoryapp_laravelinertiavue/5.create_db.png";
import inventoryApp_6 from "/public/output_inventoryapp_laravelinertiavue/6.edit_sctock.png";
import inventoryApp_7 from "/public/output_inventoryapp_laravelinertiavue/7.edit_sctock.png";
import inventoryApp_8 from "/public/output_inventoryapp_laravelinertiavue/8.stock_card.png";
import inventoryApp_9 from "/public/output_inventoryapp_laravelinertiavue/9.delete.png";
import inventoryApp_10 from "/public/output_inventoryapp_laravelinertiavue/10.delete.png";
import inventoryApp_11 from "/public/output_inventoryapp_laravelinertiavue/11.soft_delete.png";
import inventoryApp_12 from "/public/output_inventoryapp_laravelinertiavue/12.delete.png";

//Blogs-app-laravel
import blogapp_1 from "/public/output_blogsapp_laravel/1.png"
import blogapp_2 from "/public/output_blogsapp_laravel/2.png"
import blogapp_3 from "/public/output_blogsapp_laravel/3.png"
import blogapp_4 from "/public/output_blogsapp_laravel/4.png"
import blogapp_5 from "/public/output_blogsapp_laravel/5.png"

// api-ticketing-system
import api_ticketing_system_1 from "/public/output_api_ticketing_system/1.login.png"
import api_ticketing_system_2 from "/public/output_api_ticketing_system/2.get_profile.png"
import api_ticketing_system_3 from "/public/output_api_ticketing_system/3.getall_ticket.png"
import api_ticketing_system_4 from "/public/output_api_ticketing_system/4.dashboardstatistic.png"
import api_ticketing_system_5 from "/public/output_api_ticketing_system/5.register_user.png"
import api_ticketing_system_6 from "/public/output_api_ticketing_system/6.login_user.png"
import api_ticketing_system_7 from "/public/output_api_ticketing_system/7.getprofile_user.png"
import api_ticketing_system_8 from "/public/output_api_ticketing_system/8.createticket_user.png"
import api_ticketing_system_9 from "/public/output_api_ticketing_system/9.admincreate-reply.png"
import api_ticketing_system_10 from "/public/output_api_ticketing_system/10.result.png"
import api_ticketing_system_11 from "/public/output_api_ticketing_system/11.ticketsDB.png"
import api_ticketing_system_12 from "/public/output_api_ticketing_system/12.tickets-replyDB.png"

//pointOfSale
import point_of_sale1 from "/public/output_point_of_sale/1.png"
import point_of_sale2 from "/public/output_point_of_sale/2.png"
import point_of_sale3 from "/public/output_point_of_sale/3.png"
import point_of_sale4 from "/public/output_point_of_sale/4.png"
import point_of_sale5 from "/public/output_point_of_sale/5.png"
import point_of_sale6 from "/public/output_point_of_sale/6.png"
import point_of_sale7 from "/public/output_point_of_sale/7.png"
import point_of_sale8 from "/public/output_point_of_sale/8.png"
import point_of_sale9 from "/public/output_point_of_sale/9.png"
import point_of_sale10 from "/public/output_point_of_sale/10.png"
import point_of_sale11 from "/public/output_point_of_sale/11.png"
import point_of_sale12 from "/public/output_point_of_sale/12.png"



const projectsData = [
    {
      images: [point_of_sale1, point_of_sale2, point_of_sale3, point_of_sale4, point_of_sale5, point_of_sale6, 
                point_of_sale7, point_of_sale8, point_of_sale9, point_of_sale10, point_of_sale11, point_of_sale12,], 
      title: "Point Of Sale",
      description: "Point of Sale (POS) System - A web-based sales and inventory management application with real-time transaction processing, financial reporting, and automated stock control features.",
      technologies: ["Laravel, Jquery, Ajax"],
      url: "https://github.com/yonathanch/point-of-sale",
    },
  {
    images: [api_ticketing_system_1, api_ticketing_system_2, api_ticketing_system_3, api_ticketing_system_4, 
              api_ticketing_system_5, api_ticketing_system_6, api_ticketing_system_7, api_ticketing_system_8, 
              api_ticketing_system_9, api_ticketing_system_10, api_ticketing_system_11, api_ticketing_system_12, ], 
    title: "api-ticketing-system",
    description: "Managed, processed, and transformed customer or internal requests into structured digital 'tickets' to resolve issues.",
    technologies: ["Laravel"],
    url: "https://github.com/yonathanch/api-ticketing-system",
  },
  {
    images: [blogapp_1, blogapp_2, blogapp_3, blogapp_4, blogapp_5 ], 
    title: "BlogsApp-Laravel",
    description: "Full-featured blog application: Laravel Eloquent, Attach/Detach, Eager Loading, Polymorphic, Authentication, Middleware, Policy & Gates, and File Upload.",
    technologies: ["Laravel"],
    url: "https://github.com/yonathanch/blogs-app-laravel",
  },
  {
    images: [inventoryApp_1, inventoryApp_2, inventoryApp_3, inventoryApp_4, inventoryApp_5, inventoryApp_6, 
            inventoryApp_7, inventoryApp_8, inventoryApp_9, inventoryApp_10, inventoryApp_11, inventoryApp_12 ], 
    title: "InventoryApp-Laravel-Inertia-Vue",
    description: "Create a Inventory app CRUD, dan using authentication breeze",
    technologies: ["Laravel-Inertia-Vue", "Laravel Breeze"],
    url: "https://github.com/yonathanch/InventoryApp-LaravelInertiaVue",
  },
  {
    images: [laravel_todolist_api_1, laravel_todolist_api_2, laravel_todolist_api_3, laravel_todolist_api_4, laravel_todolist_api_5, 
            laravel_todolist_api_6, laravel_todolist_api_7, laravel_todolist_api_8, laravel_todolist_api_9, laravel_todolist_api_10, 
            laravel_todolist_api_11, laravel_todolist_api_12, laravel_todolist_api_13, laravel_todolist_api_14 ], 
    title: "Laravel-Todolist-Api",
    description: "Create a Laravel API on a Todolist project with CRUD features, API resources, authentication login and logout and authorization gates.",
    technologies: ["Laravel", "Sanctum"],
    url: "https://github.com/yonathanch/laravel-todolist-api",
  },
  {
    image: laravel_blogs,
    title: "Laravel-Blogs",
    description: "Created a blog website using Laravel and sql lite by implementing Eloquent ORM, Database Seeder, N+1, Searching and pagination.",
    technologies: ["Laravel", "Sql Lite"],
    url: "https://github.com/yonathanch/Laravel-blogs",
  },
  {
    image: movie_app,
    title: "Movie App",
    description: "Movie App with firebase and fetch Api",
    technologies: ["React", "Tailwind", "Firebase", "Axios", "API"],
    url: "https://movie-app-pi-blue.vercel.app/",
  },
  {
    image: realtime_app,
    title: "Realtime Chat App",
    description:
      "MERN STACK Project [realtimeChat-app (InstaApp)], Highlight: Tech Stack: Mern + Socket Io + Talwindcss and daisy UI, Zustand (global state management), Authentication & Authorizanation JWT , error handling, Deployment and Responsive design (dekstop/mobile",
    technologies: [
      "React",
      "Tailwind",
      "Node js",
      "Express.js",
      "Mongo Db",
      "Socket Io",
      "Daisy UI",
    ],
    url: "https://realtimechat-app-zfkx.onrender.com/",
  },
  {
    image: massageWebsite,
    title: "Massage-website",
    description:
      "The Massage GI website is a sanctuary of relaxation and body care, inspired by traditional Balinese massage",
    technologies: ["React", "Tailwind", "Framer-motion"],
    url: "https://massage-website-one.vercel.app/",
  },
  {
    image: emading,
    title: "Emading-jwp",
    description:
      "JeWePe e-mading website is a communication media to provide information to its students in a less formal way, This e-Mading website was created using PHP and MySQL as its database, Error handling was also added. The online magazine (e-mading) will be managed by an admin and can be read by all students. Currently, readers can only read articles.Admins can manage the magazine by logging in. They can input, edit, and delete articles.",
    technologies: ["Php", "Mysql", "Bootstrap", "Deployment"],
    url: "https://emadingjewepe.000webhostapp.com/",
  },
  {
    image: adminBalink,
    title: "admin-balink",
    description:
      "The Balink admin website functions to manage various data within it, starting from adding, editing, and deleting data in the Balink application",
    technologies: [
      "React",
      "Javascript",
      "Bootstrap",
      "Global state Management and Data Fetching",
    ],
    url: "https://admin-balink.vercel.app/",
  },
  {
    image: jessyFood,
    title: "Jessyfood-website",
    description:
      "a Restaurant Catalog website using HTML, CSS, JavaScript by implementing PWA,testing, and optimized",
    technologies: ["Html5", "Css", "Javascript", "PWAs", "Testing Optimized"],
    url: "https://katalog-restaurant-pwa-testing-and-optimized.vercel.app/",
  },

];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onImageClick }) => {
  // Check if project has multiple images
  const hasMultipleImages = project.images && project.images.length > 1;
  const displayImage = project.images ? project.images[0] : project.image;

  return (
    <ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col md:flex-row items-center gap-x-10 mt-8">
        {/* Image Container */}
        <div 
          className="md:w-[300px] w-full cursor-pointer relative"
          onClick={() => onImageClick(index)}
        >
          <img
            src={displayImage}
            alt={project.title}
            className="w-full md:w-[300px] rounded-2xl transition-all duration-300 hover:scale-105"
          />
          
          {/* Multiple Images Badge */}
          {hasMultipleImages && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
              +{project.images.length} images
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col gap-5 md:text-left mt-8">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-slate-800 p-2 px-4">
                {tech}
              </span>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (projectIndex) => {
    setSelectedProject(projectsData[projectIndex]);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    if (!selectedProject) return;
    
    const images = selectedProject.images || [selectedProject.image];
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const goToPrevious = () => {
    if (!selectedProject) return;
    
    const images = selectedProject.images || [selectedProject.image];
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  // Get current images array
  const getCurrentImages = () => {
    if (!selectedProject) return [];
    return selectedProject.images || [selectedProject.image];
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  // Handle body scroll ketika modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const currentImages = getCurrentImages();
  const totalImages = currentImages.length;

  return (
    <>
      <div
        id="projects"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
      >
        <ScrollReveal>
          <h1 className="text-4xl font-light text-white md:text-6xl">
            Recent My Projects
          </h1>
        </ScrollReveal>

        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onImageClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* Image Modal/Slideshow */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Navigation Buttons - Show only if multiple images */}
            {totalImages > 1 && (
              <>
                <button
                  className="absolute left-4 z-10 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors md:left-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  ‹
                </button>

                <button
                  className="absolute right-4 z-10 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors md:right-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImages[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-lg max-h-[80vh]"
              />
              
              {/* Image Counter - Show only if multiple images */}
              {totalImages > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {totalImages}
                </div>
              )}

              {/* Project Title */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {selectedProject.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;