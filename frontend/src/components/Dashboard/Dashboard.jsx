import {useContext, useEffect, useState} from 'react';

import {AppContext}  from '@/store/AppContext';
import Layout        from '@/components/Layout/Layout';
import httpService   from '@/services/Http';

function Dashboard() {

    const {state, dispatch} = useContext(AppContext);

    const [loading, setLoading] = useState(false);

    const [weatherReports, setWeatherReports] = useState({});

    const initWeatherReports =  function() {
        setLoading(true);
        httpService.get('/account/weather').then((response) => {
            setLoading(false);
            //dispatch({type: AppConstants.GET_WEATHER_REPORTS, payload: response.data.data});
            setWeatherReports(response.data.data);
        }).catch((error) => {
            setLoading(true);
        })
    } 

    useEffect(() => {
        initWeatherReports();
    }, []);

    return (
        <Layout>
            <div className="bg-white relative overflow-hidden">
                <div className="space-y-16 relative container xl:max-w-7xl mx-auto w-full px-4 py-16 lg:px-8 lg:py-32 min-h-screen">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 ">
                            Login Temperature
                        </h2>
                        <hr/>
                        <div className="w-full block">
                            <div className="float-right pt-3">
                                <button  type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-red-200 bg-red-200 text-red-700 hover:text-red-700 hover:bg-red-300 hover:border-red-300 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-200">
                                Hottest First
                                </button>
                                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-100 bg-gray-100 text-gray-600 hover:text-gray-600 hover:bg-gray-200 hover:border-gray-200 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-100">
                                Reset Order
                                </button>
                            </div>
                            <div className="clear-both"></div>
                        </div>

                        {loading &&
                            <div >
                                <div className="text-center">
                                    <svg role="status" className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                            </div>
                        }

                           <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                               { weatherReports  && for (const property in object) (
                                <div class="space-y-1">
                                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-center">Colombo</h2>
                                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <tbody>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        date
                                                    </th>
                                                    <td class="py-4 px-6">
                                                       celsius
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        fahrenheit
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                            </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;