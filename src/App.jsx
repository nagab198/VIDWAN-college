
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  Download,
  Calendar,
  User,
  Briefcase,
  Building, BookOpenIcon, BookOpenCheck, LucideBookOpenCheck, LucideBookOpen, BookTemplate
} from 'lucide-react';

function App() {
  const handleContactClick = () => {
    toast({
      title: "Contact Information",
      description: "For admissions and inquiries, please visit our campus or call our office during working hours.",
      variant: "default",
    });
  };

  const handleBrochureClick = () => {
    toast({
      title: "Brochure Download",
      description: "Our college brochure will be available for download shortly. Thank you for your interest!",
      variant: "default",
    });
  };

  const handleAdmissionClick = () => {
    toast({
      title: "Admission Inquiry",
      description: "Detailed admission process and important dates will be announced soon. Please check back later.",
      variant: "default",
    });
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen max-w-[1900px] m-auto bg-background text-foreground"
    >
      {/* Header */}
      <header className="relative overflow-hidden gradient-bg-header hero-pattern-subtle shadow-md">
        <div className="absolute inset-0 bg-muted"></div>
        <div className="relative z-10 container mx-auto px-4 py-4 md:py-5">
          <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-between text-white"
          >
            <div className="flex items-center">
              <BookOpenIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 text-muted-foreground" />
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  <span className="college-name-main">VIDWAN</span> <span className="college-name-secondary">DEGREE COLLEGE</span>
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm md:text-base font-medium opacity-95">BOBBILI</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground sm:text-md md:text-lg opacity-90 mt-2 sm:mt-0">College Code: 20902</p>
          </motion.div>
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="relative pt-4 pb-12 md:pb-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-xl mx-auto max-w-5xl"
          >
            <img
              className="w-full h-72 md:h-96 object-cover"
              alt="VIDWAN Degree College campus building with a clear sky"
             src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white p-4 rounded-md bg-black/20 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Fostering Knowledge, Building Futures</h2>
              <p className="text-md md:text-lg opacity-90">Your Path to Success Starts Here.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold section-title mb-4">Welcome to <span className="text-accent-custom-red">VIDWAN</span> Degree College</h2>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Established in 2001, VIDWAN Degree College is one of the most reputed institutions in Bobbili, Vizianagaram District. With a strong commitment to academic excellence and character development, we offer undergraduate programs in B.A, B.Com, and B.Sc streams.
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Our mission is to empower students with quality education, critical thinking, and lifelong skills to excel in their careers and contribute to society. Located in the heart of Bobbili, our college is affiliated and recognized for its disciplined environment and qualified faculty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Calendar, title: "Established", value: "2001", color: "text-accent-custom-light-blue" },
              { icon: User, title: "Chairman", value: "S V Ch Appala Naidu", color: "text-purple-600" }, /* Kept purple for variety or can be changed */
              { icon: Briefcase, title: "Correspondent", value: "Sambangi Srikanth", color: "text-green-600" }, /* Kept green for variety */
              { icon: GraduationCap, title: "Principal", value: "Reddi Mohan Rao, MA", color: "text-orange-600" } /* Kept orange for variety */
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                className={`info-card text-center p-6 rounded-lg`}
              >
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                <h3 className="text-lg font-semibold mb-1 text-card-foreground">{item.title}</h3>
                <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold section-title mb-4">Academic Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer a range of undergraduate programs tailored to meet industry demands and student aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { title: "Bachelor of Arts (B.A.)", description: "Explore diverse fields in humanities and social sciences. Develop critical thinking and analytical skills.", icon: BookOpen, accentColor: "", iconColor: "text-primary" },
              { title: "Bachelor of Commerce (B.Com)", description: "Gain a strong foundation in commerce, accounting, finance, and business management.", icon: Users, accentColor: "green-500", iconColor: "text-green-600" }, /* Example keeping green */
              { title: "Bachelor of Science (B.Sc)", description: "Delve into the world of science with programs in mathematics, physical, and biological sciences.", icon: Award, accentColor: "orange-500", iconColor: "text-orange-600" } /* Example keeping orange */
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                className={`course-card-edu p-6 rounded-lg`}
              >
                <div className={`w-16 h-16 bg-${course.accentColor} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-${course.accentColor}`}>
                  <course.icon className={`w-8 h-8 ${course.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <Button variant="link" className={`${course.iconColor} hover:brightness-90 p-0 h-auto`}>Learn More &rarr;</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 gradient-bg-header hero-pattern-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-muted"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-5">
              Embark on Your Educational Journey
            </h2>
            <p className="text-lg text-muted-foreground/90 mb-8 leading-relaxed">
              Discover your potential at <span className="font-semibold text-accent-custom-red text-opacity-100">VIDWAN</span> Degree College. We are committed to providing an enriching learning environment. Contact us for admissions learn more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleAdmissionClick}
                className="btn-primary px-6 py-3 text-md font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Admission Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg text-slate-300 py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-3">
                <BookOpen className="w-7 h-7 mr-2 text-slate-100" />
                <span className="text-lg font-bold text-slate-100"><span className="text-accent-custom-red">VIDWAN</span> <span className="text-accent-custom-light-blue">DEGREE COLLEGE</span></span>
              </div>
              <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                Your gateway to quality higher education in Bobbili. Committed to academic excellence and student success since 2001.
              </p>
              <div className="flex items-center text-sm text-slate-400">
                <MapPin className="w-4 h-4 mr-2 shrink-0" />
                <span>Bobbili, Vizianagaram Dist., Andhra Pradesh, India.</span>
              </div>
            </div>

            <div>
              <span className="text-md font-semibold text-slate-100 mb-3 block">Quick Links</span>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#" className="text-slate-400 footer-link transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 footer-link transition-colors">Courses Offered</a></li>
                <li><a href="#" className="text-slate-400 footer-link transition-colors">Admissions Process</a></li>
                <li><a href="#" className="text-slate-400 footer-link transition-colors">Faculty Directory</a></li>
                <li><a href="#" className="text-slate-400 footer-link transition-colors">Student Life</a></li>
              </ul>
            </div>

            <div>
              <span className="text-md font-semibold text-slate-100 mb-3 block">Contact Information</span>
              <div className="space-y-2.5 text-sm text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  <span>(To be updated with actual number)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 shrink-0" />
                  <span>info@vidwancollege.ac.in (Example)</span>
                </div>
                <Button onClick={handleContactClick} size="sm" className="mt-2 btn-outline-primary !text-white text-sm">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-accent-custom-red">VIDWAN</span> <span className="font-semibold text-accent-custom-light-blue">DEGREE COLLEGE</span>, BOBBILI. All Rights Reserved. College Code: 20902.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </motion.div>
  );
}

export default App;
