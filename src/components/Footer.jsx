import {
  BookOpen,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
 <footer className="footer-bg text-slate-300 py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-3">
                <BookOpen className="w-7 h-7 mr-2 text-slate-100" />
                <span className="text-lg font-bold text-slate-100">
                  <span className="text-accent-custom-red">VIDWAN</span>{" "}
                  <span className="text-accent-custom-light-blue">DEGREE COLLEGE</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                Your gateway to quality higher education in Bobbili. Committed to academic excellence and student success since 2001.
              </p>
              <div className="flex items-center text-sm text-slate-400">
                <MapPin className="w-4 h-4 mr-2 shrink-0" />
                <div className="flex flex-col">
                  <span>Vidwan Degree College, Meher Colony,</span>
                  <span>Bobbili, Vizianagaram Dist., Andhra Pradesh, India.</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-md font-semibold text-slate-100 mb-3 block">Quick Links</span>
              <ul className="space-y-1.5 text-sm">
                <li><Link to="/faculty" className="text-slate-400 footer-link transition-colors">Faculty Directory</Link></li>
              </ul>
            </div>

            <div>
              <span className="text-md font-semibold text-slate-100 mb-3 block">Contact Information</span>
              <div className="space-y-2.5 text-sm text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  <a href="tel:+919492023334">+91 9492023334</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  <a href="tel:+919963792423">+91 9963792423</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 shrink-0" />
                  <a href="mailto:vidwandegreebobbili@gmail.com">vidwandegreebobbili@gmail.com</a>
                </div>
                <a
                  className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mt-2 btn-outline-primary !text-white text-sm"
                  target="_blank"
                  href="mailto:vidwandegreebobbili@gmail.com?subject=Admission%20Enquiry&body=Hi,%0A%0APlease%20share%20the%20admission%20details.%0A%0A"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-accent-custom-red">VIDWAN</span>{" "}
              <span className="font-semibold text-accent-custom-light-blue">DEGREE COLLEGE</span>,
              BOBBILI. All Rights Reserved. College Code: 20902.
            </p>
          </div>
        </div>
      </footer>
    )
}
    export default FooterSection;