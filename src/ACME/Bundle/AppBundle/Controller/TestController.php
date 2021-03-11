<?php

namespace ACME\Bundle\AppBundle\Controller;

use Oro\Bundle\LayoutBundle\Annotation\Layout;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Test Controller
 * Class TestController
 *
 * @package ACME\Bundle\AppBundle\Controller
 */
class TestController extends Controller
{

    /**
     * @Route(
     *      "/test",
     *      name="acme_test"
     * )
     * @Layout(vars={"countries"})
     * @param Request $request
     * @return JsonResponse|array
     */
    public function testAction(Request $request)
    {
        return [
            'countries' => $this->get('oro_address.provider.country')->getCountriesNames(),
        ];
    }

}
