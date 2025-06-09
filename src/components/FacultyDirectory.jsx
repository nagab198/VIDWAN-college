import { useState } from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facultyData, departments } from '../data/facultyData';
import FooterSection from '@/components/Footer';
import HeaderSection from '@/components/Header';

export default function FacultyDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedDesignation, setSelectedDesignation] = useState('All');

  const availableDesignations = [
    'All',
    ...new Set(
      facultyData
        .filter(
          (faculty) =>
            selectedDepartment === 'All' || faculty.department === selectedDepartment
        )
        .map((faculty) => faculty.designation)
    ),
  ];

  const filteredFaculty = facultyData.filter((faculty) => {
    const departmentMatch =
      selectedDepartment === 'All' || faculty.department === selectedDepartment;
    const designationMatch =
      selectedDesignation === 'All' || faculty.designation === selectedDesignation;
    return departmentMatch && designationMatch;
  });

  const handleDepartmentChange = (dept) => {
    setSelectedDepartment(dept);
    setSelectedDesignation('All');
  };

  const FilterDropdown = ({ value, onChange, options, label }) => (
    <div className="w-full">
      <label className="block text-sm font-medium text-muted-foreground mb-1">
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-card py-2 pl-3 pr-10 text-left border border-border shadow-sm hover:border-primary transition-colors focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-25 sm:text-sm">
            <span className="block truncate">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-card py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground'
                    }`
                  }
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );

  return (
    <>
      <HeaderSection />
      <div className="min-h-screen bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 section-title">
              Faculty Directory
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our distinguished faculty members who are dedicated to academic
              excellence
            </p>
          </motion.div>

          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <FilterDropdown
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              options={departments}
              label="Filter by Department"
            />
            <FilterDropdown
              value={selectedDesignation}
              onChange={setSelectedDesignation}
              options={availableDesignations}
              label="Filter by Designation"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {filteredFaculty.map((faculty) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="course-card-edu p-6 rounded-lg"
              >
                <div className="w-16 h-16 bg-card bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 border-2">
                  <Users className="w-10 h-10 stroke-1.5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground text-center">
                  {faculty.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 text-center font-medium">
                  {faculty.designation}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center">
                    <span className="font-semibold text-foreground mr-2">
                      Department:
                    </span>
                    {faculty.department}
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="font-semibold text-foreground mr-2">
                      Qualification:
                    </span>
                    {faculty.qualification}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/90 transition-colors font-medium"
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
