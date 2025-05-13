import { useState } from "react";
import { CarouselContainer } from "./carousel-styles";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { formatDateToBrazil } from "../../../utils/dateFormat";

interface Carousel {
    id: string;
    img: string;
    title: string;
    description: string;
    date: number;
    location: string;
    link: string;
}

const list: Carousel[] = [
    {
        id: "12h3b",
        img: "/rockuai.jpg",
        title: "Rock uai",
        description: "Um rock com momentos indescritiveis",
        date: Date.now(),
        location: "São Paulo",
        link: "http://localhost:5173/rockuai"
    },
    {
        id: "nv9ds89",
        img: "/djlove.jpg",
        title: "Love com você",
        description: "Um amor incondicional para seu melhor momento",
        date: 262208280000,
        location: "Arena MRV",
        link: "http://localhost:5173/rockuai"
    },
    {
        id: "12i39bhhdnd",
        img: "/expocajuru.jpg",
        title: "Expo Carmo do cajuru",
        description: "Mais que um evento, uma expo de verdade",
        date: 262208280000,
        location: "Parque de Exposições Carmo do Cajuru",
        link: "http://localhost:5173/rockuai"
    }
]

export function Carousel() {
    const [itemIndex, setItemIndex] = useState(0)

    const nextImage = () => {
        setItemIndex((prevIndex) => (prevIndex + 1) % list.length);
      };
    
      const prevImage = () => {
        setItemIndex((prevIndex) =>
          prevIndex === 0 ? list.length - 1 : prevIndex - 1
        );
      };

      const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
      ) => {
        if (info.offset.x > 100) {
          prevImage();
        } else if (info.offset.x < -100) {
          nextImage();
        }
      };

    const handleClick = () => {
        window.location.href = list[itemIndex].link;
    }



  return (
    <CarouselContainer>
      <motion.div
        className="inner"
        drag="x"
        dragElastic={false}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        tabIndex={0}
        style={{ cursor: "grab" }}
        draggable={false}
      >
        <AnimatePresence mode="popLayout" propagate={false}>
          <motion.div className="item"
            key={list[itemIndex].id}
            initial={{ opacity: 0.5, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0, y: 0 }}
            transition={{ duration: 0.7 }}
            draggable={false}
            drag={false}
          >
            <motion.img
              src={list[itemIndex].img}
              alt={list[itemIndex].title}
              style={{ width: "100%" }}
              draggable={false} // Disable native drag
              onDragStart={(e) => { 
                e.preventDefault();      // Prevent default drag behavior
                e.stopPropagation();
              }} // Prevent default drag behavior
            />


            <div className="details">
                <motion.h1
                    animate={{ x: -100, y: 0}}
                    transition={{ duration: 0.6 }}
                >{list[itemIndex].title}
                </motion.h1>
                
              <motion.h4
                 animate={{ x: -100, y: 0}}
                 transition={{ duration: 0.6 }}
              >{list[itemIndex].description}
              </motion.h4>

              <motion.h3
                 animate={{ x: -100, y: 0}}
                 transition={{ duration: 0.6 }}
              >{formatDateToBrazil(list[itemIndex].date)}
              </motion.h3>

              <motion.button 
                animate={{ x: -100, y: 0}}
                transition={{ duration: 0.6 }}
                onClick={handleClick}>COMPRAR INGRESSO
                <ArrowForward fontSize="large" />
              </motion.button>
            </div>

            <div className="controls">
                <motion.button onClick={prevImage}>
                    <ArrowBack style={{ color: "white" }} />
                </motion.button>

                <motion.button onClick={nextImage}>
                    <ArrowForward style={{ color: "white" }} />
                </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </CarouselContainer>
  );
}