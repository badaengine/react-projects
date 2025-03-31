import {React,useState} from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export function Rating() {
  //const [open, setOpen] = React.useState(1);

  const questionList = [
    {
      title: "Understanding Machine Learning",
      questions: [
        "What is machine learning?",
        "How does machine learning work?",
        "What are the different types of machine learning?",
        "What are common applications of machine learning?",
      ],
    },
    {
      title: "Understanding program Learning",
      questions: [
        "What are common applications of machine learning?",
        "What is the difference between supervised and unsupervised learning?",
        "What are some popular machine learning algorithms?",
      ],
    },
    {
      title: "Understanding validate Learning",
      questions: [
        "How is deep learning related to machine learning?",
        "What are the challenges of implementing machine learning?",
        "How do you evaluate the performance of a machine learning model?",
      ],
    },
  ];

  //const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const num = [0, 1, 2, 3, 4, 5];
  const [rangeValue, setRangeValue] = useState({});
  const handlePageClick = (e, pageNumber, QIndex, StarIndex) => {
    console.log(StarIndex)
    e.preventDefault();
    setRangeValue((prevState) => ({
      ...prevState,
      [`${QIndex}-${StarIndex}`]: pageNumber,
    }));
   
  };

  const handlePrev= (e, categoryIndex, questionIndex) => {
    e.preventDefault();
    const prevNumber = rangeValue[`${categoryIndex}-${questionIndex}`] - 1;
    if (prevNumber >= 0) {
      setRangeValue((prevState) => ({
        ...prevState,
        [`${categoryIndex}-${questionIndex}`]: prevNumber,
      }));
      
    }
  };
  const handleNext= (e, categoryIndex, questionIndex) => {
    e.preventDefault();
    const prevNumber = rangeValue[`${categoryIndex}-${questionIndex}`] + 1;
    if (prevNumber <= 5) {
      setRangeValue((prevState) => ({
        ...prevState,
        [`${categoryIndex}-${questionIndex}`]: prevNumber,
      }));
      
    }
  };
  return (
    <>
      <div className="w-[1000px]">
        <h2>Review</h2>
        <Accordion type="single" collapsible className="w-full rating-section">
          {questionList.map((item, QIndex) => (
            <AccordionItem value={`item-${QIndex}`} key={QIndex}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="border p-2">
                {item.questions.map((question, idx) => (
                  <div className="flex justify-between mb-2">
                    <div key={idx}>{question}</div>
                    <div>
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious  onClick={(e) =>
                                  handlePrev(e, QIndex, idx)
                                } />
                          </PaginationItem>
                          {num.map((pageNumber, index) => (
                            <PaginationItem
                              key={index}
                              className={
                                rangeValue[`${QIndex}-${idx}`] == pageNumber
                                  ? "selected"
                                  : ""
                              }
                            >
                              <PaginationLink
                                href="#"
                                onClick={(e) =>
                                  handlePageClick(e, pageNumber, QIndex, idx)
                                }
                              >
                                {pageNumber}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext onClick={(e) =>
                                  handleNext(e, QIndex, idx)
                                } />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
