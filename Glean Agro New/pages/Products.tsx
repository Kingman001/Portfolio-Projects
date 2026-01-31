
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import LoadingSpinner from '../components/LoadingSpinner';
import { 
  ShoppingBag, Search, X, PackageSearch, Eye, Trash2, 
  CheckCircle2, ListChecks, ChevronLeft, ChevronRight, ArrowUpDown 
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  image: string;
  gallery: string[];
  description: string;
}

const Products: React.FC = () => {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quoteItems, setQuoteItems] = useState<any[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  useEffect(() => {
    // Simulating a data fetch with a timeout
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredAndSorted = PRODUCTS.filter(p => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
    if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
    return 0;
  });

  const addToQuote = (product: any) => {
    if (!quoteItems.find(item => item.id === product.id)) {
      setQuoteItems([...quoteItems, product]);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
    } else {
      setIsDrawerOpen(true);
    }
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const openDetails = (product: Product) => {
    setSelectedProduct(product);
    setActiveGalleryIdx(0);
  };

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-emerald-900 mb-4 tracking-tight">Marketplace</h1>
              <p className="text-slate-600 max-w-xl text-lg">
                Premium farm produce and industrial raw materials, harvested sustainably.
              </p>
            </div>
            
            <div className="flex bg-slate-100 p-2 rounded-2xl self-start md:self-auto shadow-inner border border-slate-200/50">
              {['All', 'Industrial', 'Consumer'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${category === cat ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-500 hover:text-emerald-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-10 py-5 bg-white rounded-[2rem] border border-slate-100 shadow-sm focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
              />
            </div>

            <div className="flex items-center bg-white border border-slate-100 rounded-[2rem] px-6 py-4 space-x-3 shadow-sm">
              <ArrowUpDown size={16} className="text-slate-400" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-sm font-bold text-slate-600 outline-none cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-5 bg-emerald-900 text-white rounded-3xl hover:bg-emerald-800 transition-all shadow-xl flex items-center space-x-3"
            >
              <ListChecks size={24} />
              <span className="font-bold text-sm">Quote List ({quoteItems.length})</span>
            </button>
          </div>
        </div>

        {/* Improved Loading State */}
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredAndSorted.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {filteredAndSorted.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openDetails(product as Product)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-emerald-900 px-4 py-2 rounded-full border border-emerald-50">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-xl">
                      <Eye size={16} />
                      <span>View Gallery</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-emerald-600 font-black text-lg mb-6">{product.priceLabel}</p>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToQuote(product); }}
                    className={`mt-auto w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${
                      quoteItems.find(item => item.id === product.id) 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-emerald-900 text-white hover:bg-emerald-800'
                    }`}
                  >
                    {quoteItems.find(item => item.id === product.id) ? <CheckCircle2 size={18} /> : <ShoppingBag size={18} />}
                    <span>{quoteItems.find(item => item.id === product.id) ? 'In Quote List' : 'Request Quote'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 animate-in fade-in duration-500">
            <PackageSearch size={64} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No matching items</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>

      {/* Product Details Modal with Gallery */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[800px] animate-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 shadow-xl"
            >
              <X size={24} />
            </button>

            {/* Gallery Left Side */}
            <div className="flex-1 bg-slate-100 relative overflow-hidden group/gallery">
              <img 
                src={selectedProduct.gallery[activeGalleryIdx]} 
                className="w-full h-full object-cover transition-all duration-700" 
                alt={selectedProduct.name} 
              />
              
              <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-4">
                {selectedProduct.gallery.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveGalleryIdx(i)}
                    className={`w-16 h-16 rounded-xl border-2 transition-all overflow-hidden ${activeGalleryIdx === i ? 'border-emerald-500 scale-110 shadow-lg' : 'border-white opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {selectedProduct.gallery.length > 1 && (
                <>
                  <button 
                    onClick={() => setActiveGalleryIdx(prev => (prev - 1 + selectedProduct.gallery.length) % selectedProduct.gallery.length)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-emerald-900 shadow-xl opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setActiveGalleryIdx(prev => (prev + 1) % selectedProduct.gallery.length)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-emerald-900 shadow-xl opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Info Right Side */}
            <div className="w-full lg:w-[400px] p-12 overflow-y-auto flex flex-col">
              <div className="mb-auto">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block">
                  {selectedProduct.category}
                </span>
                <h2 className="text-4xl font-bold text-emerald-900 mb-4">{selectedProduct.name}</h2>
                <p className="text-2xl font-black text-emerald-600 mb-8">{selectedProduct.priceLabel}</p>
                <div className="h-px w-full bg-slate-100 mb-8" />
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Product Description</h4>
                <p className="text-slate-600 leading-relaxed text-lg mb-10">
                  {selectedProduct.description}
                </p>
              </div>

              <button 
                onClick={() => { addToQuote(selectedProduct); setSelectedProduct(null); }}
                className="w-full py-5 bg-emerald-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-emerald-800 transition-all active:scale-95"
              >
                Add to Quote List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Sidebar Drawer */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[70] transition-opacity" onClick={() => setIsDrawerOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[80] p-8 flex flex-col animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-xl"><ListChecks size={24} /></div>
                <h2 className="text-2xl font-bold text-emerald-900">Quote Request List</h2>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="text-slate-400 hover:text-emerald-600"><X size={28} /></button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
              {quoteItems.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag size={48} className="mx-auto text-slate-200 mb-6" />
                  <p className="text-slate-500">Your quote list is empty.</p>
                </div>
              ) : (
                quoteItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <img src={item.image} className="w-20 h-20 rounded-2xl object-cover" alt={item.name} />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      <p className="text-[10px] text-emerald-600 font-black uppercase mt-1">{item.category}</p>
                    </div>
                    <button onClick={() => removeFromQuote(item.id)} className="p-3 text-slate-300 hover:text-red-500"><Trash2 size={18} /></button>
                  </div>
                ))
              )}
            </div>

            {quoteItems.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100">
                <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95">
                  Submit Quote Request
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {showSuccessToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-emerald-900 text-white px-8 py-4 rounded-3xl shadow-2xl z-[100] flex items-center space-x-3 animate-in slide-in-from-bottom-4">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span className="font-bold text-sm">Added to quote list!</span>
        </div>
      )}
    </div>
  );
};

export default Products;
