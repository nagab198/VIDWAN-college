import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import FooterSection from '@/components/Footer';
import HeaderSection from '@/components/Header';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Calendar,
  User,
  Briefcase,
} from 'lucide-react';

export default function Home() {
  const handleContactClick = () => {
    toast({
      title: 'Contact Information',
      description:
        'For admissions and inquiries, please visit our campus or call our office during working hours.',
      variant: 'default',
    });
  };

  return (
    <>
      <HeaderSection />

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
              src="/college-photo.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white p-4 rounded-md bg-black/20 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-1">
                Fostering Knowledge, Building Futures
              </h2>
              <p className="text-md md:text-lg opacity-90">
                Your Path to Success Starts Here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold section-title mb-4">
              Welcome to <span className="text-accent-custom-red">VIDWAN</span>{' '}
              Degree College
            </h2>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Established in 2001, VIDWAN Degree College is one of the most reputed
              institutions in Bobbili, Vizianagaram District. With a strong
              commitment to academic excellence and character development, we offer
              undergraduate programs in B.A, B.Com, and B.Sc streams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Calendar,
                title: 'Established',
                value: '2001',
                color: 'text-accent-custom-light-blue',
              },
              {
                icon: User,
                title: 'Chairman',
                value: 'S V Ch Appala Naidu',
                color: 'text-purple-600',
              },
              {
                icon: Briefcase,
                title: 'Correspondent',
                value: 'Sambangi Srikanth',
                color: 'text-green-600',
              },
              {
                icon: GraduationCap,
                title: 'Principal',
                value: 'Reddi Mohan Rao, MA',
                color: 'text-orange-600',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                className="info-card text-center p-6 rounded-lg"
              >
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                <h3 className="text-lg font-semibold mb-1 text-card-foreground">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold section-title mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer a range of undergraduate programs tailored to meet industry
              demands and student aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Bachelor of Arts (B.A.)',
                description:
                  'Explore diverse fields in humanities and social sciences. Develop critical thinking and analytical skills.',
                icon: BookOpen,
                accentColor: '',
                iconColor: 'text-primary',
              },
              {
                title: 'Bachelor of Commerce (B.Com)',
                description:
                  'Gain a strong foundation in commerce, accounting, finance, and business management.',
                icon: Users,
                accentColor: 'green-500',
                iconColor: 'text-green-600',
              },
              {
                title: 'Bachelor of Science (B.Sc)',
                description:
                  'Delve into the world of science with programs in mathematics, physical, and biological sciences.',
                icon: Award,
                accentColor: 'orange-500',
                iconColor: 'text-orange-600',
              },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                className="course-card-edu p-6 rounded-lg"
              >
                <div
                  className={`w-16 h-16 bg-${course.accentColor} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-${course.accentColor}`}
                >
                  <course.icon className={`w-8 h-8 ${course.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <Button
                  variant="link"
                  className={`${course.iconColor} hover:brightness-90 p-0 h-auto`}
                >
                  Learn More &rarr;
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
              Discover your potential at{' '}
              <span className="font-semibold text-accent-custom-red text-opacity-100">
                VIDWAN
              </span>{' '}
              Degree College. We are committed to providing an enriching learning
              environment. Contact us for admissions learn more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 btn-primary px-6 py-3 text-md font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                target="_blank"
                href="mailto:vidwandegreebobbili@gmail.com?subject=Admission%20Enquiry&body=Hi,%0A%0APlease%20share%20the%20admission%20details.%0A%0A"
              >
                <GraduationCap className="w-5 h-5 mr-2" /> Admission Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
