<?php

namespace ACME\Bundle\AppBundle\Controller\Frontend\Api\Rest;

use FOS\RestBundle\Controller\Annotations\NamePrefix;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use Symfony\Component\HttpFoundation\Response;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;

/**
 * @RouteResource("country")
 * @NamePrefix("oro_api_frontend_")
 */
class CountryController extends \Oro\Bundle\AddressBundle\Controller\Api\Rest\CountryController
{

    /**
     * REST GET countries
     *
     * @ApiDoc(
     *      description="Get countries",
     *      resource=true
     * )
     * @return Response
     */
    public function cgetAction()
    {
        return parent::cgetAction();
    }
}